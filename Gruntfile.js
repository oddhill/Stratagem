module.exports = function(grunt) {

  grunt.registerTask('watch', [ 'watch' ]);

  grunt.initConfig({
    sass: {
      options: {
        sourcemap: "none",
      },
      style: {
        files: {
          "css/main.css": "sass/main.scss"
        }
      }
    },
    sassdoc: {
      default: {
        'src': 'animations/',
        'dest': 'documentation/'
      }
    },
    watch: {
      css: {
        files: ['**/*.scss'],
        tasks: ['sass:style'],
        options: {
          livereload: false,
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sassdoc');
};
