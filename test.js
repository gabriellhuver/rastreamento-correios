const correios = require('./index');

async function main() {
    try {
        let result = await correios.sro.buscarObjeto("TESTEOBJETO")
        if (result.objeto) {
            console.log(result)
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