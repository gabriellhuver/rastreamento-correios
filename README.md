# Correios rastreamento - NodeJS

Interface de rastreamento de objetos correios.com.br

![](https://travis-ci.org/gabriellhuver/rastreamento-correios.svg?branch=master)

## Biblioteca de rastreamento de objetos

Aplicativo faz um web scrap na pagina de correios e pega os dados da consulta

### Pre-requisitos e Instalação

* [Noje JS]( https://nodejs.org/en/) - Node JS

		npm i correios-rastreamento --save



## Rastreando objetos

Rastreando um objeto

```js
const correios = require('correios-rastreamento')

correios.sro.rastrearObjeto('PU9999999BR').then(function(res){
    console.log(res)
})

```

## Built With

* [Noje JS]( https://nodejs.org/en/) - JavaScript runtime

## Authors

* **Gabriell Huver** - [gabriellhuver](https://github.com/gabriellhuver)


