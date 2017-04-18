const gulp = require('gulp');
const jshint = require('gulp-jshint');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');

const paths = {
    scripts:['./app/**/*.js']
};

gulp.task('lint', function() {
  return gulp.src('./app/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('babel', function () {
    return gulp.src(['./app/**/*.js', './app/**/*.json'])
        .pipe(babel({
            presets:['latest']
        }))
        .pipe(gulp.dest('./public'));
});

gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['lint', 'babel']);
});

gulp.task('default', ['watch','lint', 'babel']);
