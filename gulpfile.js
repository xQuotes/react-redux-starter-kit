var gulp = require('gulp');
var uglify = require('gulp-uglify');
var pump = require('pump');
var htmlmin = require('gulp-htmlmin');
var cleanCSS = require('gulp-clean-css');

gulp.task('miniCss', function() {
  return gulp.src('dist/*.css')
    .pipe(cleanCSS({
      compatibility: 'ie8'
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('minJS', function(cb) {
  pump([
        gulp.src(['dist/*.js', '!dist/config.*.js']),
        uglify({
          mangle: true,//类型：Boolean 默认：true 是否修改变量名
          compress: true,//类型：Boolean 默认：true 是否完全压缩
          preserveComments: 'all' //保留所有注释
        }),
        gulp.dest('dist')
    ],
    cb
  );
});

gulp.task('minHtml', function() {
  return gulp.src('dist/*.html')
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['miniCss', 'minJS', 'minHtml']);