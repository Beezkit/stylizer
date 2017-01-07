module.exports = function(grunt) {


  require('load-grunt-tasks')(grunt);
  // Configuration de Grunt
  grunt.initConfig({

    jshint: {
      all: ['js/plugin/*.js', 'js/stylizer.js'],
    },

    uglify: {
      options: {
        mangle: false
      },
      dist: {
        files: {
          'js/stylizer.min.js': ['js/plugin/*.js', 'js/stylizer.js'],
        }
      }
    },

    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'compressed'
        },
        files: {                         // Dictionary of files
          'css/stylizer.min.css': 'scss/stylizer.scss'      // 'destination': 'source'
        }
      }
    },

    watch: {
      js: {
        files: ['js/stylizer.js', 'js/plugin/*.js', '!js/jquery-3.1.1.min.js'],
        tasks: ['jshint', 'uglify'],
        options: {
          spawn: false,
        },
      },
      css: {
        files: ['scss/*.scss'],
        tasks: 'sass',
        options: {
          spawn: false,
        },
      }
    },

    sprite:{
      all: {
        src: 'img/**/*.png',
        dest: 'dist/sprite.png',
        destCss: 'css/sprites.css'
      }
    }

  })

  // Définition des tâches Grunt
  grunt.registerTask('default', ['jshint', 'sass', 'sprite', 'uglify']);

}
