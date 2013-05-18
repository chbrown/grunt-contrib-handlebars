var glob = require('glob');
var path = require('path');

module.exports = function(grunt) {
  grunt.registerMultiTask('handlebars', 'Precompile Handlebars template', function() {
    var done = this.async();
    var opts = this.data;

    var handlebars_js = require.resolve('handlebars');
    var handlebars_bin = path.normalize(handlebars_js + '/../../bin/handlebars');
    grunt.verbose.writeflags(opts, 'Options');
    glob(opts.src + '/*.' + (opts.ext || 'handlebars'), function (err, matches) {
      var args = [].concat(['-m'], matches, ['-f', opts.dest]);
      grunt.util.spawn({cmd: handlebars_bin, args: args}, function (err, result, code) {
        if (err) {
          grunt.fail.fatal(result);
        }
        done();
      });
    });
  });
};
