const correios = require('../../index')
const test = require('tape')

find()

async function find() {
    try {
        var ret = await correios.sro.rastrearObjeto("PU505780823BR")
    } catch (error) {
        console.log(error)
    }
    if (ret === 'Product not found!') {
        return true
    } else {
        console.log(ret)
        return true
    }
}