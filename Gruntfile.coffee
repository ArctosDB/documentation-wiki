#spawn = require('child_process').spawn
#require("load-grunt-tasks")(grunt)

module.exports = (grunt) ->
  # Gruntfile
  # https://github.com/sindresorhus/grunt-shell
  grunt.loadNpmTasks("grunt-shell")
  # https://www.npmjs.com/package/grunt-contrib-coffee
  grunt.loadNpmTasks("grunt-contrib-coffee")
  # https://github.com/gruntjs/grunt-contrib-watch
  grunt.loadNpmTasks("grunt-contrib-watch")
  grunt.loadNpmTasks("grunt-contrib-uglify")
  grunt.loadNpmTasks("grunt-contrib-cssmin")
  # Validators
  grunt.loadNpmTasks('grunt-bootlint')
  grunt.loadNpmTasks('grunt-html')
  grunt.loadNpmTasks('grunt-string-replace')
  grunt.loadNpmTasks('grunt-postcss')
  grunt.loadNpmTasks('grunt-contrib-less')
  grunt.initConfig
    pkg: grunt.file.readJSON('package.json')
    shell:
      options:
        stderr: false
        execOptions:
          maxBuffer: 1048576
      test:
        command: "echo test"
      movesrc:
        command: ["mv js/c.src.coffee js/maps/c.src.coffee"].join("&&")
    min:
      dist:
        src:['js/c.js']
        dest:'js/c.min.js'
    cssmin:
      options:
        sourceMap: true
        advanced: false
      target:
        files:
          "style.min.css":["style.css"]
    uglify:
      options:
        mangle:
          except:['jQuery']
      dist:
        options:
          sourceMap:true
          sourceMapName:"js/maps/c.map"
          sourceMapIncludeSources:true
          sourceMapIn:"coffee/maps/c.js.map"
          compress:
            # From https://github.com/mishoo/UglifyJS2#compressor-options
            dead_code: true
            unsafe: true
            conditionals: true
            unused: true
            loops: true
            if_return: true
            drop_console: true # Production! Change to false in dev
            warnings: true
            properties: true
            sequences: true
            cascade: true
        files:
          "js/c.min.js":["js/c.js"]
    coffee:
      compile:
        options:
          bare: false
          join: true
          sourceMapDir: "coffee/maps"
          sourceMap: true
        files:
          "js/c.js":"coffee/*.coffee"
    less:
      # https://github.com/gruntjs/grunt-contrib-less
      options:
        sourceMap: true
        outputSourceFiles: true
      files:
        dest: "style.css"
        src: ["less/style.less"]
    postcss:
      options:
        processors: [
          require('autoprefixer-core')({browsers: 'last 1 version'})
          ]
      dist:
        src: "style.css"
    watch:
      scripts:
        files: ["coffee/*.coffee"]
        tasks: ["coffee:compile","uglify:dist"]
  # Now the tasks
  grunt.registerTask("default",["watch"])
  grunt.registerTask("compile","Compile coffeescript",["coffee:compile", "shell:movesrc","uglify:dist"])
  grunt.registerTask("compileNoUglify","Compile coffeescript",["coffee:compile","shell:movesrc"])
