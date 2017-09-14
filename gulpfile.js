var gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
cleanCSS = require('gulp-clean-css'),
  rename = require('gulp-rename'),
    maps = require('gulp-sourcemaps'),
     del = require('del');

//Concatenates scripts
gulp.task("concatScripts", function() {
 return gulp.src(['./static/js/variables.js',
           './static/js/animations.js',
           './static/js/functions.js'])
     .pipe(maps.init())
     .pipe(concat("appJS.js"))
     .pipe(maps.write('./'))
     .pipe(gulp.dest("./static/js"));
});

//Minifies JavaScript
gulp.task("minifyScripts", ["concatScripts"], function() {
  return gulp.src('./static/js/appJS.js')
      .pipe(uglify())
      .pipe(rename('appJS.min.js'))
      .pipe(gulp.dest("./static/js"));
});

//Minifies CSS
gulp.task("minifyCSS", function() {
  return gulp.src('./static/stylesheets/style.css')
      .pipe(cleanCSS())
      .pipe(rename('style.min.css'))
      .pipe(gulp.dest("./static/stylesheets"));
});

//Runs a task each time a save is made in the correlating files chosen.
gulp.task("watchFiles", function() {
  gulp.watch("./static/stylesheets/style.css", ['minifyCSS']);
  gulp.watch("./static/js/*.js", ["minifyScripts"]);
});

//Runs the task 'watchFiles'
gulp.task("serve", ['watchFiles']);

//Runs dependencies then saves all selected files in the "dist" folder
gulp.task("build", ["concatScripts", "minifyScripts", "minifyCSS"], function() {
  return gulp.src(["static/images/*.png",
            "static/stylesheets/style.min.css",
            "static/js/appJS.min.js"],
            {base: "./"})
      .pipe(gulp.dest("dist"));
});

//Deletes + recreates specified folders + files
gulp.task("clean", function() {
  del('dist', './static/js/appJS.js.map');
});

//Runs all
gulp.task("default", ["clean"], function() {
  gulp.start("build");
});
