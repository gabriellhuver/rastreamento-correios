const correios = require('../../index')

find()

async function find() {
    try {
        var ret = await correios.sro.rastrearObjeto("LS714905589CH")
        console.log(ret)
        if(ret) console.log('Build pass!')
    } catch (error) {
        console.log(error)
    }
}