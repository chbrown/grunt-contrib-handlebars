var glob = require('glob');

module.exports = function(grunt) {
  grunt.registerMultiTask('handlebars', 'Precompile Handlebars template', function() {
    var done = this.async();
    var opts = this.data;
    var handlebars = __dirname + '/node_modules/grunt-contrib-handlebars/node_modules/.bin/handlebars';
    // grunt.verbose.writeflags(opts, 'Options');
    glob(opts.src + '/*.' + (opts.ext || 'handlebars'), function (err, matches) {
      var args = [].concat(['-m'], matches, ['-f', opts.dest]);
      grunt.util.spawn({cmd: handlebars, args: args}, function (err, result, code) {
        if (err) {
          grunt.fail.fatal(result);
        }
        done();
      });
    });
  });
};
