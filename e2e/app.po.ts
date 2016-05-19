export class Angular2cliClientPage {
  navigateTo() {
    return browser.get('/');
  }

  getMenu(): protractor.ElementArrayFinder{ 
    return element.all(by.css('.nav>li'));
  }
}
