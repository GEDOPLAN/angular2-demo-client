import { Angular2cliClientPage } from './app.po';

describe('angular2cli-client App', function() {
  let page: Angular2cliClientPage;

  beforeEach(() => {
    page = new Angular2cliClientPage();
  })

  it('should display menus', () => {
    page.navigateTo();
    expect(page.getMenu().count()).toEqual(3);
  });
});
