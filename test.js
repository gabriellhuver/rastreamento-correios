const correios = require('./index');



async function main() {
    try {
        let result = await correios.sro.buscarObjectos(["teste"])
        if (result.objeto.erro.includes("Objeto não encontrado")) {
            console.log('Test result: Ok');
            console.log('Host: webservice.correios.com.br')
            console.log('Ver: ' + result.versao)
        } else {
            console.log('Test failed.')
        }
    } catch (error) {
        console.log(error)
    }
}
main()