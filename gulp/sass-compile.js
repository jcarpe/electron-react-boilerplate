/**
 * Compile sass
 */

// TODO: optimize sass settings

var gulp = require('gulp'),
	sass = require('gulp-sass');

gulp.task( 'sass-compile', function () {
	return gulp.src( './src/sass/main.scss', { base: './src/sass' } )
		.pipe( sass() )
		.pipe( gulp.dest( './dist/css' ) );
});