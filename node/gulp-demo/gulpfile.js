const gulp = require('gulp');
gulp.task("ddd", async() => {
    console.log('人生中的第一个gulp任务执行了');
    gulp.src("./src/css/index.css")
        .pipe(gulp.dest('dist/css'));

});