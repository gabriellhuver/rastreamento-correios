# Correios rastreamento Nodejs

Rastreamento de objetos correios.com.br

## Biblioteca de rastreamento de objetos

Aplicativo faz um request no serviço SOAP de reastreamento dos correios e retorna os rastreios em um objeto JSON

* NPM Package https://www.npmjs.com/package/correios-rastreamento
### Pre-requisitos e Instalação

Node.js
Npm
Instalação:

		npm i correios-rastreamento --save


### Testando

		npm run test


## Rastreando objetos

Rastreamento de objeto

```
const correios = require('correios-rastreamento')

correios.sro.buscarObjeto("BR1242141BR").then(result => {
    console.log(result)
})
```


## Built With

* [Noje JS]( https://nodejs.org/en/) - JavaScript runtime
* [SOAP](https://www.npmjs.com/package/soap) - Soap package Npm



## Authors

* **Gabriell Huver** - *all* - [gabriellhuver](https://github.com/gabriellhuver)

## Please give me a job ! xD

