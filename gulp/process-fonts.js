/**
 * Process source fonts
 */

var gulp = require( 'gulp' );

gulp.task( 'process-fonts', [], function () {
	return gulp.src( './src/fonts/**/*', { base: './src/fonts' })
		.pipe( gulp.dest( './dist/fonts' ) );
});