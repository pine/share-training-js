gulp = require 'gulp'
gutil = require 'gulp-util'
webserver = require 'gulp-webserver'

browserify = require 'browserify'
source = require 'vinyl-source-stream'
buffer = require 'vinyl-buffer'
runSequence = require 'run-sequence'
del = require 'del'


runBrowserify = ->
  browserify
      entries: ['./src/app.js']
      debug: true
    .bundle()
    .on 'error', (err) ->
      gutil.log 'Browserify', err.message
      @emit('end')
    .pipe source('app.js')
    .pipe buffer()

# ---------------------------------------------------------

gulp.task 'browserify', ->
  runBrowserify()
    .pipe gulp.dest 'dist/'


gulp.task 'copy', ->
  gulp.src ['src/**/*.html', 'src/**/*.css']
    .pipe gulp.dest('dist')


gulp.task 'webserver', ->
  gulp.src 'dist'
    .pipe webserver
      livereload: true


gulp.task 'clean', (cb) ->
  del(['dist'], cb)


gulp.task 'default', (cb) ->
  runSequence(
    'clean',
    ['browserify', 'copy'],
    cb)

gulp.task 'watch', ['webserver'], (cb) ->
  runSequence 'default', ->
    gulp.watch ['src/**/*.js'], ['browserify']
    gulp.watch ['src/**/*.html', 'src/**/*.css'], ['copy']
    
    cb()
