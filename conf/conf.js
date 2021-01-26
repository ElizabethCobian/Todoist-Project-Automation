exports.config = {
    seleniumAddress : 'http://localhost:4444/wd/hub',
    //specs: ['../specs/homepage.js', '../specs/login.js'],
    specs: ['../specs/login.js'],
    framework: 'jasmine',
    jasmineNodeOpts: {
      showColors: true,
    }     
      
    };