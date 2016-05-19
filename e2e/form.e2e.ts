import { Angular2cliFormPage } from './form.po';

describe('angular2cli-client Form', function() {
    let page: Angular2cliFormPage;
    beforeEach(() => {
        page = new Angular2cliFormPage();
    })

    it("check correct loaded customer", () => {
        page.navigateTo();
        let customer = page.CUSTOMER_ID;
        expect(page.getIdField().getAttribute('value')).toBe(customer);
    })

    it("check filled fields", () => {
        page.navigateTo();
        page.getAllFields().each(ele => {
            expect(ele.getAttribute('value')).toBeTruthy();
        })
    })
});
