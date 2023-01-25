const request = require('request');
const cheerio = require('cheerio')

const uri = "https://www.linkcorreios.com.br/"



exports.rastrearObjeto = function (code) {
    return new Promise((resolve, reject) => {
        try {
            request(uri + code, function (error, response, body) {
                if (error) reject('Invalid request!')
                var html = cheerio.load(body)
                var strs = []
                var ret = []
                wrapData(html, strs, ret);
                if (!ret.length) {
                    resolve({ status_list: [], status_code: response.statusCode })
                } else {
                    ret = JSON.parse(JSON.stringify(ret.reverse()))
                    ret.shift()
                    resolve({ status_list: ret, status_code: response.statusCode })
                }
            })
        } catch (error) {
            reject(error)
        }
    })
}

function wrapData(html, strs, ret) {
    html('.linha_status').each(function (index, elem) {
        strs.push(elem);
    });
    strs.forEach(element => {
        let status, data, local, origem, destino
        html(element).find('li').each(function (index, elem) {
            let text = html(elem).text()
            if (text && text.includes('Status')) { status = text }
            if (text && text.includes('Data')) { data = text }
            if (text && text.includes('Local')) { local = text }
            if (text && text.includes('Origem')) { origem = text }
            if (text && text.includes('Destino')) { destino = text }
        })
        ret.push({
            status: extractStatus(status),
            data: extractData(data),
            local: extractLocal(local),
            origem: extractOrigem(origem),
            destino: extractDestino(destino)
        })
    });


}
function extractDestino(destino) {
    const _destino = destino ? destino : undefined;
    if (!_destino) return undefined;
    return _destino.replace('Destino: ', '');
}

function extractOrigem(origem) {
    const _origem = origem ? origem : undefined;
    if (!_origem) return undefined;
    return _origem.replace('Origem: ', '');
}

function extractLocal(local) {
    const _local = local ? local : undefined;
    if (!_local) return undefined;
    return _local.replace('Local: ', '');
}

function extractData(data) {
    const _data = data ? data : undefined;
    let date = _data.match(/\d{2}\/\d{2}\/\d{4}/);
    let time = _data.match(/\d{2}:\d{2}/);

    let [day, month, year] = date[0].split("/");
    let [hours, minutes] = time[0].split(":");

    return new Date(year, month - 1, day, hours, minutes);
}

function extractStatus(status) {
    const _status = status ? status : undefined;
    if (!_status) return undefined;
    return _status.replace('Status: ', '');
}

