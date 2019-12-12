const correios = require('../../index')
const test = require('tape')


test('Find Product', async (t) => {
    t.assert((await correios.sro.rastrearObjeto("test") !== null), "Find product OK")
    t.end()
})


//correios.sro.rastrearObjeto('LO394359932CN').then(function(res){
//    console.log(res)}
//)