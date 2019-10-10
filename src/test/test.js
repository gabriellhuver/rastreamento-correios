const correios = require('../../index')

find()

async function find() {
    try {
        var ret = await correios.sro.rastrearObjeto("CODIGO")
        console.log(ret)
    } catch (error) {
        console.log(error)
    }
}