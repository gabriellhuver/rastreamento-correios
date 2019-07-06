const correios = require('../../index')
async function main() {
    let testObjectID = await correios.sro.rastrearObjecto("PU9999999BR")
    console.log(testObjectID)
}

main()