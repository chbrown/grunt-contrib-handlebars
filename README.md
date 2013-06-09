# grunt-contrib-handlebars

Less is more. See `handlebars --help` for options.

Required:

* `templates` -- a file glob

Optional:

* `output` -- output filename
* `min` -- minify templates
* `namespace` -- where to access templates
* `root` -- prefix to leave off names
* `extension` -- extension to leave off names

## `Gruntfile.js`

    module.exports = function(grunt) {
      grunt.initConfig({
        handlebars: {
          all: {
            templates: 'templates/**/*.bars',
            root: 'templates',
            extension: 'bars',
            output: 'static/templates.js'
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

## License

Copyright © 2013 Christopher Brown. [MIT Licensed](LICENSE).
