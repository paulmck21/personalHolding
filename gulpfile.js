var gulp = require('gulp'),
	jshint = require('gulp-jshint'),
	jshintReporter = require('jshint-stylish'),
	sass = require('gulp-sass'),
	watch = require('gulp-watch'),
	sassGlob = require('gulp-sass-glob'),
	browserify = require('gulp-browserify'),
	plumber = require('gulp-plumber'),
	babel = require('gulp-babel'),
	uglify = require('gulp-uglify'),
	sassLint = require('gulp-sass-lint'),
	autoprefixer = require('gulp-autoprefixer');

// Create variables for our project paths so we can change in one place
var paths = {
	'src':['./script/*.js','package.json'],
		style:{
			all: '**/*.scss',
			input: 'site.scss',
			output: 'site.css',
			baseDir: './public/bundle'
		}
};

// Browserify
gulp.task('bsify', function() {
	// Single entry point to browserify
	gulp.src('./script/app.js')
		.pipe(plumber())
		.pipe(browserify({
		  insertGlobals : true
		}))
		.pipe(gulp.dest('./public/assets'))
});

// Babelify
gulp.task('uglify', () => { //Uglifies and transpiles
	return gulp.src('public/assets/app.js')
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(uglify())
		.pipe(gulp.dest('./public/bundle'));
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
	return gulp.src('./sass/site.scss')
		.pipe(sassGlob())
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer())
		.pipe(gulp.dest('./public/bundle'))
});

// ------------------------------------------
// gulp js lint
// ------------------------------------------
gulp.task('jslint', function(){
	gulp.src(paths.src)
		.pipe(jshint())
		.pipe(jshint.reporter(jshintReporter));
});

// ------------------------------------------
// gulp SASS lint
// ------------------------------------------
gulp.task('sasslint', function () {
  gulp.src('./sass/**/*.scss')
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnErrolkr())
});

// Gulp watcher for lint
gulp.task('watchLint', function () {
	gulp.src(paths.src)
		.pipe(watch())
		.pipe(jshint())
		.pipe(jshint.reporter(jshintReporter));
});

// ------------------------------------------
// Bundled tasks - watching / testing etc
// ------------------------------------------

// The watcher see's all + watching scss/html files
gulp.task('watchit', ['sass', 'bsify', 'uglify'], function() {
    gulp.watch("./sass/**/*.scss", ['sass']);
    gulp.watch("./script/**/*.js", ['bsify', 'uglify']);
});

// Prep of assets - ugilify, minify, Babel Transpile
// Linting of Js and Sass
gulp.task('default', ['watchit']);

// File cleanup
// SASS - gulp sasslint
// Js - gulp jslint
// Js Minify - gulp uglify





