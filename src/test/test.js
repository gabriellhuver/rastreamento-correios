const correios = require('../../index')

find()

async function find() {
    try {
        var ret = await correios.sro.rastrearObjeto("OH306846684BR")
        console.log(ret)
    } catch (error) {
        console.log(error)
    }
}