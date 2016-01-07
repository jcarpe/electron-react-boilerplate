/**
 * Optimization of images directory
 */

var gulp 	= require('gulp'),
	imageop = require('gulp-image-optimization');

gulp.task( 'image-optimize', function () {
	return gulp.src([
		'./src/images/*.png',
		'./src/images/*.jpg',
		'./src/images/*.gif',
		'./src/images/*.jpeg'
	], {
		base: './src/images'
	})
	.pipe(imageop({
		optimizationLevel: 5,
		progressive: true,
		interlaced: true
	}))
	.pipe( gulp.dest( './dist/images' ) );
	// .on('end', cb)
	// .on('error', cb);
});