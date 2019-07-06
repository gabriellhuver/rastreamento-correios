const request = require('request');
const cheerio = require('cheerio')
const uri = "https://www.linkcorreios.com.br/"
exports.rastrearObjecto = function (code) {
    return new Promise((resolve, reject) => {
        try {
            request(uri + code, function (error, response, body) {
                if (error) reject('Invalid request!')
                var html = cheerio.load(body)
                var strs = []
                var ret = []
                html('td').each(function (index, elem) {
                    strs.push(html(elem).text())
                })
                for (let index = 0; index < strs.length; index += 4) {
                    let data = strs[index];
                    let status = strs[index + 1]
                    let origem = strs[index + 2]
                    let destino = strs[index + 3]
                    if (status.includes('Objeto postado')) destino = "Não existe destino de origem"
                    ret.push({
                        data: data,
                        status: status,
                        origem: origem,
                        destino: destino
                    })
                }
                resolve(ret.reverse())
            })
        } catch (error) {
            reject(error)
        }
    })
}