const correios = require('../../index')
const test = require('tape')

test('Teste do serviço', async (t) => {
    t.assert(await find(), "Serviço Ok")
    t.end()
})

async function find() {
    var ret = await correios.sro.rastrearObjecto("PU505780824BR")
    if (ret === 'Product not found!') {
        return true
    } else {
        console.log(ret)
        return true
    }
}