const correios = require('../../index')
async function main() {
    try {
        let testObjectID = await correios.sro.rastrearObjecto("PU9999999BR")
        console.log('Test Success!')

    } catch (error) {
        console.log("Pass failed")
    }
}

main()