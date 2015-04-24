module.exports = function(grunt) {

  grunt.registerTask('watch', [ 'watch' ]);

  grunt.initConfig({
    sass: {
      options: {
        sourcemap: "none",
      },
      style: {
        files: {
          "css/main.css": "sass/main.scss",
          "css/print.css": "sass/print.scss",
          "css/normalize.css": "sass/normalize.scss"
        }
      }
    },
    jshint: {
      options: {
        reporter: require('jshint-stylish')
      },

      all: ['js/**/*.js']
    },
    svg2png: {
      all: {
        files: [
          { cwd: 'graphics/', src: ['**/*.svg'], dest: 'graphics/' }
        ]
      }
    },
    watch: {
      js: {
        files: ['js/**/*.js'],
        tasks: ['jshint'],
        options: {
          livereload: false,
        }
      },
      css: {
        files: ['sass/**/*.scss'],
        tasks: ['sass:style'],
        options: {
          livereload: false,
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-svg2png');
  grunt.loadNpmTasks('grunt-contrib-watch');
};
