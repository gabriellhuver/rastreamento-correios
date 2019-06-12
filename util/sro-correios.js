'use strict'
var soap = require('soap');

const url = 'https://webservice.correios.com.br/service/rastro/Rastro.wsdl';

exports.buscarObjeto = function (objeto) {
    return new Promise((resolve, reject) => {
        var args = {
            usuario: 'ECT',
            senha: 'SRO',
            tipo: 'L',
            resultado: 'T',
            lingua: 101,
            objetos: objeto
        };
        try {
            soap.createClient(url, function (err, client) {
                if (err) reject(err)
                client.buscaEventosLista(args, function (err, result) {
                    if (err) reject(err)
                    resolve(result.return)
                });
            });

        } catch (error) {
            reject(error)
        }
    })
}