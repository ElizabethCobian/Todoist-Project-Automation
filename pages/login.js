var login = function(){

    var email_input = element(by.id('email'));
    var password_input = element(by.id('password'));
    var loginButton = element(by.css('.submit_btn'));

    this.get = function(url){
        
        browser.get(url);
    };

    this.existingUser = function(){

        email_input.sendKeys("elizabeth.cobian7@gmail.com");
        password_input.sendKeys("divoom07");
        loginButton.click();

    };

     this.notExistingUser = function(){

        email_input.sendKeys("test@testing.com");
        loginButton.click();
        expect(element(by.css('.error_msg')).isPresent()).toBe(true);

    };
};
module.exports = new login();
