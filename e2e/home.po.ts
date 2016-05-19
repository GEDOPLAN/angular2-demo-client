export class Angular2cliHomePage {
  navigateTo() {
    return browser.get('/home');
  }

  getHomeAreas(): protractor.ElementArrayFinder{ 
    return element.all(by.css('.centered>div'));
  }
}
