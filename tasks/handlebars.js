var path = require('path');
var glob = require('glob');

module.exports = function(grunt) {
  grunt.registerMultiTask('handlebars', 'Precompile Handlebars template', function() {
    var done = this.async();
    var opts = this.data;
    var namespace = opts.namespace || 'Handlebars.templates';

    var handlebars_js = require.resolve('handlebars');
    var handlebars_bin = path.normalize(handlebars_js + '/../../bin/handlebars');
    grunt.verbose.writeflags(opts, 'Options');
    glob(opts.glob, function (err, matches) {
      var args = matches.concat(['--min', '--namespace', namespace, '--output', opts.dest]);
      grunt.util.spawn({cmd: handlebars_bin, args: args}, function (err, result, code) {
        if (err) {
          grunt.fail.fatal(result);
        }
        done();
      });
    });
  });
};
