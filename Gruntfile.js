module.exports = function (grunt) {
  grunt
  .initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        options: {
          style: 'expanded'
        }
        , files: {
          'public/css/styles.css': 'sass/styles.scss'
        }
      }
    }
    , clean: [
      '.sass-cache'
    ]
    , jshint: {
      options: {
        'asi': true
        , 'laxcomma': true
      }
      , all: ['Gruntfile.js', 'js/**/*.js'],
    }
  })
  grunt.loadNpmTasks('grunt-contrib-sass')
  grunt.loadNpmTasks('grunt-contrib-clean')
  grunt.loadNpmTasks('grunt-contrib-jshint')

  grunt.registerTask('default', ['sass', 'jshint'])
  grunt.registerTask('live', ['clean'])
}