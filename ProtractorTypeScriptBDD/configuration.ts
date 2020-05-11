import {Config} from "protractor"

export let config: Config = {
   // seleniumAddress: 'http://localhost:4444/wd/hub',
   directConnect:true,
    framework: 'jasmine',
    capabilities: {
      browserName: 'chrome'
    },
    specs: ['homepage.js' ],
    
  
    // You could set no globals to true to avoid jQuery '$' and protractor '$'
    // collisions on the global namespace.
    noGlobals: true
  };