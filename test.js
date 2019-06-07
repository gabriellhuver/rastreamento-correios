const correios = require('./index');

async function main() {
    try {
        let result = await correios.sro.buscarObjeto("TESTE")
        if (result.objeto != null) {
            console.log('Test result: Ok');
            console.log('Host: webservice.correios.com.br')
            console.log('Ver: ' + result.versao)
            console.log(JSON.stringify(result))
        } else {
            console.log('Test failed.')
        }
    } catch (error) {
        console.log(error)
    }
}
main()