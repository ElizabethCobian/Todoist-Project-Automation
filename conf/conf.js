exports.config = {
    seleniumAddress : 'http://localhost:4444/wd/hub',
    specs: ['../specs/homepage-spec.js', '../specs/login-spec.js'],
    //specs: ['../specs/login-spec.js'],
    framework: 'jasmine',
    jasmineNodeOpts: {
      showColors: true,
    }     
      
    };