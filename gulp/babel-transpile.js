/**
 * Babel process for ES6/JSX under scripts source
 */

var gulp 			= require( 'gulp' ),
    babel 			= require( 'gulp-babel' );

gulp.task( 'babel-transpile', function () {
	return gulp.src( './src/scripts/**/*', { base:'./src/scripts' })
		.pipe( babel() )
		.pipe( gulp.dest( './dist/scripts' ) );
});