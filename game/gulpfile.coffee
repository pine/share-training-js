gulp = require 'gulp'
gutil = require 'gulp-util'

browserify = require 'browserify'
source = require 'vinyl-source-stream'
buffer = require 'vinyl-buffer'
runSequence = require 'run-sequence'
del = require 'del'


runBrowserify = ->
  browserify
      entries: ['./src/index.js']
      debug: true
    .bundle()
    .on 'error', (err) ->
      gutil.log 'Browserify', err.message
      @emit('end')
    .pipe source('index.js')
    .pipe buffer()

# ---------------------------------------------------------

gulp.task 'browserify', ->
  runBrowserify()
    .pipe gulp.dest 'dist/js/'


gulp.task 'clean', (cb) ->
  del(['dist'], cb)


gulp.task 'default', (cb) ->
  runSequence(
    'clean',
    ['browserify'],
    cb)
