const correios = require('../../index')

find()

async function find() {
    try {
        var ret = await correios.sro.rastrearObjeto("CODIGO")
        if(ret) console.log('Build pass!')
    } catch (error) {
        console.log(error)
    }
} 