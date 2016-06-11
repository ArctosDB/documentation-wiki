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
      bam:
        command: "cake bam"
      min:
        command: "cake min"
      bower:
        command: ["cd arctosdb.org", "bower update"].join("&&")
      compress:
        command: ["rm arctosdb.org.zip", "7za a -ssw -y -mx9 -tzip arctosdb.org.zip arctosdb.org -mmt"].join("&&")
      movesrc:
        command: ["mv arctosdb.org/js/c.src.coffee arctosdb.org/js/maps/c.src.coffee"].join("&&")
    min:
      dist:
        src:['arctosdb.org/js/c.js']
        dest:'arctosdb.org/js/c.min.js'
    cssmin:
      options:
        sourceMap: true
        advanced: false
      target:
        files:
          "arctosdb.org/style.min.css":["arctosdb.org/style.css"]
    uglify:
      options:
        mangle:
          except:['jQuery']
      dist:
        options:
          sourceMap:true
          sourceMapName:"arctosdb.org/js/maps/c.map"
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
          "arctosdb.org/js/c.min.js":["arctosdb.org/js/c.js"]
    coffee:
      compile:
        options:
          bare: false
          join: true
          sourceMapDir: "coffee/maps"
          sourceMap: true
        files:
          "arctosdb.org/js/c.js":"coffee/*.coffee"
    less:
      # https://github.com/gruntjs/grunt-contrib-less
      options:
        sourceMap: true
        outputSourceFiles: true
      files:
        dest: "arctosdb.org/style.css"
        src: ["less/style.less"]
    postcss:
      options:
        processors: [
          require('autoprefixer-core')({browsers: 'last 1 version'})
          ]
      dist:
        src: "arctosdb.org/style.css"
    watch:
      scripts:
        files: ["coffee/*.coffee"]
        tasks: ["coffee:compile","uglify:dist"]
      styles:
        files: ["less/*.less"]
        tasks: ["less","postcss","cssmin"]
  # Now the tasks
  grunt.registerTask("default",["watch"])
  grunt.registerTask("compile","Compile coffeescript",["coffee:compile", "shell:movesrc","uglify:dist"])
  grunt.registerTask("compileNoUglify","Compile coffeescript",["coffee:compile","shell:movesrc"])
  grunt.registerTask("minify","Minify all the things",["uglify:dist","less","postcss","cssmin"])
  grunt.registerTask("update","Update bower dependencies",["shell:bower"])
  grunt.registerTask("compress","Compress for deployment",["shell:compress"])
  grunt.registerTask "qbuild","Compile, update, and compress", ->
    grunt.task.run("compileNoUglify","minify", "compress")
  grunt.registerTask "build","Compile, update, and compress", ->
    grunt.task.run("update","compileNoUglify","minify","compress")
