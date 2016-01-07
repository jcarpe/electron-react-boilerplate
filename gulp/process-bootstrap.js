/**
 * Process the bootstrap (entrypoint) for the electron application
 */

// TODO: script optimization/minification
// TODO: explore app config in build process?

var gulp 			= require( 'gulp' );

gulp.task( 'process-electron-bootstrap', function () {
	return gulp.src([
		'./src/index.html',
		'./src/main.js',
		'./src/package.json',
		'./src/app-config.json' ])
		.pipe( gulp.dest( './dist' ) );
});