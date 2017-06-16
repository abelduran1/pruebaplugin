var exec = require('cordova/exec')

var PLUGIN_NAME = 'Echo';

var Echo = {
  echo: function(phrase, cb){
      exec(cb, null, PLUGIN_NAME, 'echo', [phrase]);
  }
 };
 
 module.exports = Echo;
