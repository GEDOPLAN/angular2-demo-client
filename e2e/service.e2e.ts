import { Angular2cliSericePage } from './service.po';

describe('angular2cli-client Home', function() {
  let page: Angular2cliSericePage;
  beforeEach(() => {
    page = new Angular2cliSericePage();
  })
  
  it("check customer count", () => {
      page.navigateTo();
      page.getCustomerCount().then(e => {
          expect(+e).toBeGreaterThan(10);
      })
  })
  
  it("check example customer", () => {
      page.navigateTo();
      let customerTexts=page.getExampleCustomer();
      customerTexts.then(elements => {
          expect(elements.length).toBe(10);
          expect(elements).toContain("ALFAA")
      })
  })
});
