var login = require('../pages/login')

describe('Login Scenarios', function(){
    
    it('Login with an Existing User', function(){
        
        browser.waitForAngularEnabled(false);
        login.get('https://todoist.com/users/showlogin');

        login.existingUser();

        browser.sleep(7000);
    });

    it('Error when the User does not Exist', function(){

        browser.waitForAngularEnabled(false);
        login.get('https://todoist.com/users/showlogin');

        login.notExistingUser();

        browser.sleep(7000);       


    });

});

