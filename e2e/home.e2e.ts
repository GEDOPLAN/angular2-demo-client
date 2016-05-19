import { Angular2cliHomePage } from './home.po';

describe('angular2cli-client Home', function() {
  let page: Angular2cliHomePage;
  beforeEach(() => {
    page = new Angular2cliHomePage();
    
  })

  it('should display content areas', () => {
    page.navigateTo();
    expect(page.getHomeAreas().count()).toEqual(3);
  });
});
