var gulp = require('gulp');
var vulcanize = require('gulp-vulcanize');
var crisper = require('gulp-crisper');
var htmlmin = require('gulp-html-minifier');
var uglify = require('gulp-uglify');
var pump = require('pump');
 
gulp.task('vulcanize', function () {
    return gulp.src('src/aq-dashboard/aq-dashboard.html')
        .pipe(vulcanize({
            abspath: '',
            //excludes: ['bower_components/nvd3-elements/','bower_components/juicy-ace-editor/','bower_components/simplemde/','bower_components/webcomponentsjs/','bower_components/polymer/'],
            excludes: ['bower_components/iron-iconset-svg/','bower_components/iron-icon/','bower_components/iron-meta/', 'bower_components/vaadin-icons/','bower_components/webcomponentsjs/','bower_components/polymer/'],
            stripExclude: ['bower_components/iron-iconset-svg/','bower_components/iron-icon/','bower_components/iron-meta/','bower_components/vaadin-icons/','bower_components/webcomponentsjs/','bower_components/polymer/'],
            //inlineScripts:true,
            //inlineCss:true,
            stripComments:true,

        })).pipe(crisper())
        .pipe(gulp.dest('build/src/aq-dashboard'));
});

 
gulp.task('compress', ['vulcanize'], function (cb) {
  pump([
        gulp.src('build/src/aq-dashboard/aq-dashboard.js'),
        uglify(),
        gulp.dest('build/src/aq-dashboard')
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
