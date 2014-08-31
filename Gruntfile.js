/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
    // Task configuration.
    watch: {
      scsslint: {
        files: 'template/**/*.scss',
        tasks: ['scsslint']
      },
      css: {
        files: 'template/**/*.scss',
        tasks: ['sass']
      },
      node: {
        files: ['api/api.js', 'template/template.html'],
        tasks: ['shell']
      }
    },
    sass: {
      dist: {
        files: {
            'style.css' : 'template/scss/style.scss'
        }
      }
    },
    scsslint: {
      allFiles: [
        'template/**/*.scss'
      ],
      options: {
        config: 'template/scss/.scss-lint.yml'
      }
    },
    shell: {
      node: {
        command: ['cd api', 'node api.js'].join('&&')
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-scss-lint');
  grunt.loadNpmTasks('grunt-shell');

  // Default task.
  grunt.registerTask('default', ['shell', 'sass', 'scsslint', 'watch']);
};
