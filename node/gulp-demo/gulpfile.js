const gulp = require('gulp');
// html压缩
var htmlmin = require('gulp-htmlmin');

gulp.task("ddd", async() => {
    console.log('人生中的第一个gulp任务执行了');
    gulp.src("./src/css/index.css")
        .pipe(gulp.dest('dist/css'));

});
gulp.task("htmlmin", async() => {
    gulp.src("../gulp-demo/src/index.html")
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist'));
})