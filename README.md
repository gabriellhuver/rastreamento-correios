# Correios rastreamento - NodeJS

Modulo de rastreamento de objetos https://www.linkcorreios.com.br/

![](https://travis-ci.org/gabriellhuver/rastreamento-correios.svg?branch=master)

## Biblioteca de rastreamento de objetos

O modulo faz uma simples requisição no novo sistema do [Correios](https://www.linkcorreios.com.br/) fazendo o web scrap dos dados de rastreamento, usa as dependencias [Cheerio](https://www.npmjs.com/package/cheerio) e [request](https://www.npmjs.com/package/request)


### Pre-requisitos e Instalação

* [Noje JS]( https://nodejs.org/en/) - Node JS

```shell
		$ npm install correios-rastreamento --save
```


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


