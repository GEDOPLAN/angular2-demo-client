export class Angular2cliSericePage {
  navigateTo() {
    return browser.get('/service');
  }

  getCustomerCount(){ 
    let badget:protractor.ElementFinder=element(by.css('.badge'));
    return badget.getText();
  }
  
  getExampleCustomer(){
      return element.all(by.css('tr>td:first-child')).map(node => node.getText());
  }
}
