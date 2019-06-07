'use strict'
var soap = require('soap');

const url = 'http://webservice.correios.com.br/service/rastro/Rastro.wsdl';

exports.buscarObjectos = function (objeto) {
    return new Promise((resolve, reject) => {
        var args = {
            usuario: 'ECT',
            senha: 'SRO',
            tipo: 'L',
            lingua: 101,
            objetos: objeto
        };
        try {
            soap.createClient(url, function (err, client) {
                if (err) reject(err)
                client.buscaEventos(args, function (err, result) {
                    if (err) reject(err)
                    resolve(result.return)
                });
            });

        } catch (error) {
            reject(error)
        }
    })
}