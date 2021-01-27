var login = require('../pages/login')

describe('Login Scenarios', function(){
    
    it('Login with an Existing User', function(){
        
        browser.waitForAngularEnabled(false);
        login.get('https://todoist.com/users/showlogin');

        login.existingUser();

        browser.sleep(8000);
    });

    it('Error when the User does not Exist', function(){

        browser.waitForAngularEnabled(false);
        login.get('https://todoist.com/users/showlogin');

        


    });

});

