var login = function(){

    this.get = function(url){
        
        browser.get(url);
    };

    this.existingUser = function(){
        var email_input = element(by.id('email'));
        var password_input = element(by.id('password'));
        var loginButton = element(by.css('.submit_btn'));
    };

};
module.exports = new login();
