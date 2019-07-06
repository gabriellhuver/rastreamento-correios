# Correios rastreamento Nodejs

Rastreamento de objetos correios.com.br

## Biblioteca de rastreamento de objetos

Aplicativo faz um web scrap na pagina de correios e pega os dados da consulta

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

correios.sro.rastrearObjecto('PU9999999BR').then(function(res){
    console.log(res)
})

```

## Built With

* [Noje JS]( https://nodejs.org/en/) - JavaScript runtime

## Authors

* **Gabriell Huver** - *all* - [gabriellhuver](https://github.com/gabriellhuver)

## Please give me a job ! xD

