// Karma configuration
// Generated on Fri Apr 01 2016 19:54:57 GMT+0100 (Hora de verano GMT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: [
                  'mocha',
                  'chai'
                ],

    client: {
      mocha: {
        ui: 'tdd'
      }//bdd o tdd
    },

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
                    'test/test.html': ['html2js']
                    },


    // list of files / patterns to load in the browser
    files: [
            'http://xregexp.com/v/3.1.0/xregexp-all.js',
            'assets/js/main.js',
            'assets/js/medida.js',
            'assets/js/temperatura.js',

            'index.html',
            'test/test.html',

            'test/chai.js',
            'test/mocha.js',
            'test/blanket/blanket_mocha.js',
            'test/spec.js',//test

          ],


    // list of files to exclude
    exclude: [ 'gulpfile.js'
             ],


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: [
                'progress'
               ],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Firefox',
              'PhantomJS'
              ],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // If browser does not capture in given timeout [ms], kill it
    //captureTimeout: 60000,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
