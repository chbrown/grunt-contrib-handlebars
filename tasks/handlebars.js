var path = require('path');
var glob = require('glob');
module.exports = function(grunt) {
  grunt.registerMultiTask('handlebars', 'Precompile Handlebars template', function() {
    var done = this.async();
    var opts = grunt.util._.extend({templates: '**/*.mu'}, this.data);
    var handlebars_js = require.resolve('handlebars');
    var handlebars_bin = path.normalize(handlebars_js + '/../../bin/handlebars');
    grunt.verbose.writeflags(opts, 'Options');
    glob(opts.templates, function (err, args) {
      if (opts.output)
        args.push('--output', opts.output);
      if (opts.min)
        args.push('--min');
      if (opts.namespace)
        args.push('--namespace', opts.namespace);
      if (opts.root)
        args.push('--root', opts.root);
      if (opts.extension)
        args.push('--extension', opts.extension);
      grunt.util.spawn({cmd: handlebars_bin, args: args}, function (err, result, code) {
        if (err) {
          grunt.fail.fatal(result);
        }
        done(err);
      });
    });
  });
};
