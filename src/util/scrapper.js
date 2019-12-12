const request = require('request');
const cheerio = require('cheerio')
const uri = "https://www.linkcorreios.com.br/"


exports.rastrearObjeto = function (code) {
    return new Promise((resolve, reject) => {
        try {
            request(uri + code, function (error, response, body) {
                if (error) reject('Invalid request!')
                const html = cheerio.load(body)
                var strs = []
                var ret = []
                wrapData(html, strs, ret);
                if (!ret.length) {
                    resolve('Product not found!')
                } else {
                    resolve(ret.reverse())
                }
            })
        } catch (error) {
            reject(error)
        }
    })
}

function wrapData(html, strs, ret) {
    html('td').each(function (index, elem) {
        strs.push(html(elem).text());
    });
    for (let index = 0; index < strs.length; index++) {
        if (dateRegEx(strs[index])) {
            let status = {}
            status.data = strs[index];
            status.status = strs[index + 1];
            if (strs[index + 2] && strs[index + 2].includes('Local:')) {
                status.local = strs[index + 2];
            }
            if (strs[index + 2] && strs[index + 2].includes('Origem:')) {
                status.origem = strs[index + 2];
            }
            if (strs[index + 3] && strs[index + 3].includes('Destino:')) {
                status.destino = strs[index + 3];
            }
            ret.push(status)
        }

    }
}

function dateRegEx(date) {
    var pattern = new RegExp("^(3[01]|[12][0-9]|0[1-9])/(1[0-2]|0[1-9])/[0-9]{4} (2[0-3]|[01]?[0-9]):([0-5]?[0-9])$");
    if (date.search(pattern) === 0) return true;
    else {
        return false;
    }
}