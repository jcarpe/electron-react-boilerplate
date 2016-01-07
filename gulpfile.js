/**
 * Build process for Electron/React application
 */

// TODO: distinguish a dev vs. dist compilation process
// TODO: allow build args for development

var gulp 			= require( 'gulp' ),
	childProcess 	= require( 'child_process' ),
	electron 		= require( 'electron-prebuilt' ),
	babel 			= require( 'gulp-babel' ),
	requireDir 		= require( 'require-dir' );

var tasks = requireDir('./gulp');

gulp.task( 'default', ['run'] );

gulp.task( 'run', [
		'babel-transpile',
		'process-fonts',
		'sass-compile',
		'process-electron-bootstrap'
	], function () {
		childProcess.spawn( electron, [ './dist' ], {
			stdio: 'inherit'
		});
	}
);