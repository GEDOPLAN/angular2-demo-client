export class Angular2cliClientPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angular2cli-client-app h1')).getText();
  }
}
