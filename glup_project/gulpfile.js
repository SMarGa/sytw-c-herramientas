var gulp = require("gulp");
var concatCss = require("gulp-concat-css");
var cleanCSS = require("gulp-clean-css");
var browserSync = require("browser-sync").create();
var sourcemaps = require("gulp-sourcemaps");
var imagemin = require("gulp-imagemin");
// Concatenar y minificar CSS
gulp.task("css", () => {
  return gulp
    .src("src/css/*.css")
    .pipe(sourcemaps.init())
    .pipe(concatCss("bundle.css"))
    .pipe(cleanCSS())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist/css"))
    .pipe(browserSync.stream());
});

// Copiar HTML a dist
gulp.task("html", function () {
  return gulp
    .src("src/html/*.*")
    .pipe(gulp.dest("dist"))
    .pipe(browserSync.stream());
});

// Copiar imagenes a dist
gulp.task("images", function () {
  return gulp
    .src("src/images/*.*", { encoding: false })
    .pipe(gulp.dest("dist/images"))
    .pipe(
      imagemin({
        optimizationLevel: 5,
        progressive: true,
        interlaced: true,
        multipass: true,
      })
    );
});

// Copiar scripts JS a dist
gulp.task("scripts", function () {
  return gulp
    .src("src/js/*.*")
    .pipe(gulp.dest("dist/js"))
    .pipe(browserSync.stream());
});

// Servidor de desarrollo
gulp.task("serve", function () {
  browserSync.init({
    server: "./dist",
  });

  gulp.watch("src/css/*.css", gulp.series("css"));
  gulp.watch("src/html/*.html", gulp.series("html"));
  gulp.watch("src/js/*.js", gulp.series("scripts"));
  gulp.watch("src/images/*.*", gulp.series("images"));
});

// Tarea por defecto
gulp.task("default", gulp.series("html", "css", "scripts", "images", "serve"));
