var login = require('../pages/login')

describe('Do login with an existing User', function(){
    
    it('Login', function(){
        
        browser.waitForAngularEnabled(false);
        login.get('https://todoist.com/users/showlogin');

        login.enterEmail('elizabeth.cobian7@gmail.com');
        login.enterPass('divoom07');
        login.clickLogin();


        browser.sleep(8000);
    });

});

