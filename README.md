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

## Rastreando objetos Versão 2

A versão 2 foi melhorada a extração dos dados, a data é extraida em formato Date() sem o timezone

```js
const correios = require('correios-rastreamento')

correios.sroV2.rastrearObjeto('PU9999999BR').then(function(res){
    console.log(res)
})

```
Response Example
```
{ status_list:
   [  {
          status: 'Objeto em trânsito - por favor aguarde',
          data: '2023-01-25T15:21:00.000Z',
          origem: 'Unidade de Distribuição - Fortaleza / CE',
          destino: 'Unidade de Distribuição - Fortaleza / CE'
        },
  status_code: 200 }
```



## Rastreando objetos Versão 1

Rastreando um objeto

```js
const correios = require('correios-rastreamento')

correios.sro.rastrearObjeto('PU9999999BR').then(function(res){
    console.log(res)
})

```
Response Example
```
{ status_list:
   [ { status:
        'Status: Objeto recebido na unidade de exportação no país de origem',
       data: 'Data  : 1/11/2000 | Hora: 12:12',
       local: 'Local: SUECIA -  / ' },
  status_code: 200 }
```


## Built With

* [Noje JS]( https://nodejs.org/en/) - JavaScript runtime

## Authors

* **Gabriell Huver** - [gabriellhuver](https://github.com/gabriellhuver)


