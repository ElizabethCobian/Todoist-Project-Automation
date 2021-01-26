var login = function(){

    var email_input = element(by.id('email'));
    var password_input = element(by.id('password'));
    var loginButton = element(by.css('.submit_btn'));

    this.get = function(url){
        browser.get(url);
    };

    this.enterEmail = function(emailAdded){
        email_input.sendKeys(emailAdded);
    };

    this.enterPass = function(passAdded){
        password_input.sendKeys(passAdded);
    };

    this.clickLogin = function(){
        loginButton.click();
    };

    this.

};
module.exports = new login();