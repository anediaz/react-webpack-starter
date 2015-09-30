var baseConfig = require('./karma.conf.js');
var _ = require('lodash');

var testConfig = {
  preprocessors: {
      'tests.webpack.js': ['sourcemap']
  },
  reporters: ['spec'],
  webpack: {
      devtool: 'inline-source-map'
  }
}

// Merge the base config with the test config
var testConfig = _.merge(baseConfig, testConfig, function(a, b) {
    if (_.isArray(a)) {
        return a.concat(b);
    }
});

module.exports = function(conf){
    conf.set(testConfig);
};
