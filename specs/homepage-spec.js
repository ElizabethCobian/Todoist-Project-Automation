var homepage = require('../pages/homepage')

describe('Home-page Testing Links', function(){

    it('Home-page', function(){

        browser.waitForAngularEnabled(false);
        homepage.get('https://todoist.com/');

        homepage.homePageLogo();
        homepage.linkFeature();
        homepage.linkPremium(); 

        browser.sleep(5000);
    });



});