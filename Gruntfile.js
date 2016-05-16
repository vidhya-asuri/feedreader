module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        includePaths: ['bower_components/foundation/scss']
      },
      dist: {
        options: {
          outputStyle: 'compressed',
          sourceMap: true,
        },
        files: {
          'css/style.css': 'scss/style.scss', 
          'css/normalize.css': 'scss/normalize.scss', 
          'css/icomoon.css': 'scss/icomoon.scss' 
        }
      }
    },
    jsbeautifier : {
       files: {
         src : ["js/list.js", "./jasmine/spec/feedreader.js"]
       },
       options: {
         dest : ["js/dest/"],
       }
    },
    watch: {
      grunt: {
        options: {
          reload: true
        },
        files: ['Gruntfile.js']
      },

      sass: {
        files: 'scss/**/*.scss',
        tasks: ['sass']
      }
    },
    jshint: {
      files: ['jasmine/spec/feedreader.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-jsbeautifier');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('build', ['sass']);
  grunt.registerTask('default', ['build','watch']);
}
