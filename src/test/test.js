const correios = require('../index')
async function main() {
    let j = await correios.sro.rastrearObjecto("PU505780823BR")
    console.log(j)
}

main()