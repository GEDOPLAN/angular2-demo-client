export class Angular2cliFormPage {
  
  CUSTOMER_ID="ALFAA"
      
  navigateTo() {
    return browser.get(`/forms/${this.CUSTOMER_ID}`);
  }


    getIdField() {
        return element(by.css("#customerID"));
    }
    
    getSubmitButton() {
        return element(by.css("button[type='submit']"));
    }
    
    getAllFields() {
        return element.all(by.css("input.form-control"));
    }
  
}
