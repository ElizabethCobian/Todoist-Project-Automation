var homepage = function() {
    
    this.get = function(url){
        browser.get(url);
    };

    this.homePageLogo = function() {

        element(by.css('._2FJDO'));
        element(by.css('.cOri8'));

    };

    this.linkFeature = function() {

        element(by.className('_3w5OK')).element(by.className('_2q_cf')).click();
        var buttonDiscover = element(by.xpath('//a[.="Discover new features"]'));
        buttonDiscover.click();
        element(by.css('.section__h1'));
    };

    this.linkPremium = function() {

        element(by.xpath('//a[.="Premium"]')).click();
        var buttonGetPremium = element(by.css('._2k-7Y'));
        buttonGetPremium.click();
        expect(element(by.css('[for="email"]')).isPresent()).toBe(true);

    };

};

module.exports = new homepage();