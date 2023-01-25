const correios = require('../../index')


describe("Status test", () => {
    test("it should status code 200", async () => {
        var ret = await correios.sro.rastrearObjeto("teste")
        console.log(ret)
        expect(ret.status_code).toEqual(200);
    });
});


describe("Status test VER 2", () => {
    test("it should status code 200", async () => {
        var ret = await correios.sroV2.rastrearObjeto("teste")
        console.log(ret)
        expect(ret.status_code).toEqual(200);
    });
});