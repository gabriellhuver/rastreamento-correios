const correios = require('../../index')


describe("Status test", () => {
    test("it should status code 200", async () => {
        var ret = await correios.sro.rastrearObjeto("lb277957266se")
        console.log(ret)
        expect(ret.status_code).toEqual(200);
   
    });
});