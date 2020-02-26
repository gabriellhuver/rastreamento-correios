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
                    resolve({status_list:[], status_code: response.statusCode})
                } else {
                    ret = JSON.parse(JSON.stringify(ret.reverse()))
                    ret.shift()
                    resolve({status_list:ret, status_code: response.statusCode})
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
            status: status ? status : undefined,
            data: data ? data : undefined,
            local: local ? local : undefined,
            origem: origem ? origem : undefined,
            destino: destino ? destino : undefined
        })
    });


}
