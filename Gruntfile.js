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
    , autoprefixer: {
      compile: {
        expand: true
        , cwd: 'public/css'
        , src: '**/*.css'
        , dst: 'public/css'
      }
    }
    , jade: {
      compile: {
        options: {
          pretty: true
          , client: false
        }
        , files: [{
          src: '**/*.jade'
          , ext: '.html'
          , dest: 'public'
          , cwd: 'templates/views'
          , expand: true
        }]
      }
    }
    , watch: {
      scripts: {
        files: ['**/*.js']
        , tasks: ['jshint']
      }
      , jade: {
        files: ['**/*.jade']
        , tasks: ['jade']
      }
      , sass: {
        files: ['**/*.scss']
        , tasks: ['sass']
      }
    }
  })
  grunt.loadNpmTasks('grunt-contrib-sass')
  grunt.loadNpmTasks('grunt-contrib-clean')
  grunt.loadNpmTasks('grunt-contrib-jshint')
  grunt.loadNpmTasks('grunt-contrib-jade')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-autoprefixer')

  grunt.registerTask('default', ['sass', 'jshint', 'jade', 'watch'])
  grunt.registerTask('live', ['clean', 'autoprefixer'])
}