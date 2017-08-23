var gulp = require('gulp');
var vulcanize = require('gulp-vulcanize');
var crisper = require('gulp-crisper');
var htmlmin = require('gulp-html-minifier');
//var uglify = require('gulp-uglify-es');
var uglifyjs = require('uglify-es');
var composer = require('gulp-uglify/composer');
var minify = composer(uglifyjs, console);
var pump = require('pump');

gulp.task('vulcanize', function () {
    return gulp.src('src/aq-app/aq-app.html')
        .pipe(vulcanize({
            abspath: '',
            excludes:['bower_components/iron-iconset-svg/','bower_components/iron-icon/','bower_components/iron-meta/', 'bower_components/vaadin-icons/','bower_components/webcomponentsjs/','bower_components/polymer/'],
            stripComments:true,
        })).pipe(crisper())
        .pipe(gulp.dest('build/src/aq-app'));
});

 //'bower_components/iron-scroll'
gulp.task('compress', ['vulcanize'], function (cb) {
  pump([
        gulp.src('build/src/aq-app/aq-app.js'),
        minify(),
        gulp.dest('build/src/aq-app')
    ],
    cb
  );
});

gulp.task('copy',['compress'], function() {
    gulp.src('resources/**/*')
      .pipe(gulp.dest('build/resources'));

    gulp.src('bower_components/**/*')
      .pipe(gulp.dest('build/bower_components'));

    gulp.src('index.html')
      .pipe(gulp.dest('build'));

    gulp.src('bower.json')
      .pipe(gulp.dest('build')); 

});

gulp.task('default',['copy']);  
