# grunt-contrib-handlebars

Less is more.

## `Gruntfile.js`

    module.exports = function(grunt) {
      grunt.initConfig({
        handlebars: {
          all: {
            src: 'templates',
            ext: 'mu',
            dest: 'static/templates.js'
          }
        },
      });
      grunt.loadNpmTasks('grunt-handlebars');
      grunt.registerTask('default', ['handlebars']);
    };

## `packages.json`

    {
      ...
      "devDependencies": {
        "grunt": "*",
        "grunt-contrib-handlebars": "git://github.com/chbrown/grunt-contrib-handlebars.git",
        ...
      }
    }

### License

MIT Licensed
