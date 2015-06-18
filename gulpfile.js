var gulp = require('gulp'),
		sass = require('gulp-ruby-sass'),
		bower = require('gulp-bower'),
		notify = require('gulp-notify'),
		webserver = require('gulp-webserver');

config = {
	bowerDir: "./bower_components",
	sassPath: "./libs/sass"
};

gulp.task('bower', function() {
	return bower()
		.pipe(gulp.dest(config.bowerDir));
});

gulp.task('icons', function() {
	return gulp.src(config.bowerDir + '/fontawesome/fonts/**.*')
		.pipe(gulp.dest('./app/fonts'));
});

gulp.task('css', function() {
	return sass('libs/sass', {
		loadPath: [
			'./libs/sass',
			config.bowerDir + '/bootstrap-sass-official/assets/stylesheets',
			config.bowerDir + '/fontawesome/scss'
		]
	})
	.on('error', notify.onError(function() {
		return "Error: " + error.message;
	}))
	.pipe(gulp.dest('./app/css'));
});

gulp.task('webserver', function(){
	gulp.src('./app')
		.pipe(webserver({
			livereload: true,
			port: 12504,
			open: true,
			fallback: 'index.html'
		}));
});

gulp.task('watch', function() {
	gulp.watch(config.sassPath + '/**/*.scss', ['css']);
});