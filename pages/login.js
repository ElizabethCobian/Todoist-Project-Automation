var login = function(){

    var email_input = element(by.id('email'));
    var password_input = element(by.id('password'));
    var loginButton = element(by.css('.submit_btn'));
    var addTaskButton = element(by.id('app_holder'));

    this.get = function(url){
        
        browser.get(url);
    };

    this.existingUser = function(){

        email_input.sendKeys("elizabeth.cobian7@gmail.com");
        password_input.sendKeys("divoom07");
        loginButton.click();
        //expect(addTaskButton.isPresent()).toBe(true);

    };

     this.notExistingUser = function(){

        email_input.sendKeys("test@testing.com");
        password_input.sendKeys("1234567");
        loginButton.click();

    };
};
module.exports = new login();
