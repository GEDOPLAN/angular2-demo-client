import { Angular2cliClientPage } from './app.po';

describe('angular2cli-client App', function() {
  let page: Angular2cliClientPage;

  beforeEach(() => {
    page = new Angular2cliClientPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('angular2cli-client works!');
  });
});
