var gulp = require("gulp");
var debug = require("gulp-debug");
var cleancss = require("gulp-clean-css");
var uglify = require("gulp-uglify");
var htmlmin = require("gulp-htmlmin");
var htmlclean = require("gulp-htmlclean");
var imagemin = require("gulp-imagemin");
var changed = require("gulp-changed");
var gulpif = require("gulp-if");
var plumber = require("gulp-plumber");
var isScriptAll = true;
var isDebug = true;
var gulpBabel = require("gulp-babel");
var es2015Preset = require("babel-preset-es2015");
var del = require("del");
var Hexo = require("hexo");
var hexo = new Hexo(process.cwd(), {});

gulp.task("clean", function () {
    return del(["public/**/*"]);
});

gulp.task("generate", function () {
    return hexo.init().then(function () {
        return hexo
            .call("generate", {
                watch: false
            })
            .then(function () {
                return hexo.exit();
            })
            .catch(function (err) {
                return hexo.exit(err);
            });
    });
});


gulp.task("server", function () {
    return hexo
        .init()
        .then(function () {
            return hexo.call("server", {});
        })
        .catch(function (err) {
            console.log(err);
        });
});


gulp.task("deploy", function () {
    return hexo.init().then(function () {
        return hexo
            .call("deploy", {
                watch: false
            })
            .then(function () {
                return hexo.exit();
            })
            .catch(function (err) {
                return hexo.exit(err);
            });
    });
});

gulp.task("compressJs", function () {
    return gulp
        .src(["./public/**/*.js", "!./public/libs/**"]) //排除的js
        .pipe(gulpif(!isScriptAll, changed("./public")))
        .pipe(gulpif(isDebug, debug({
            title: "Compress JS:"
        })))
        .pipe(plumber())
        .pipe(
            gulpBabel({
                presets: [es2015Preset] // es5检查机制
            })
        )
        .pipe(uglify()) //调用压缩组件方法uglify(),对合并的文件进行压缩
        .pipe(gulp.dest("./public")); //输出到目标目录
});

// 压缩public目录下的css文件
gulp.task("compressCss", function () {
    var option = {
        rebase: false,
        //advanced: true, //类型：Boolean 默认：true [是否开启高级优化（合并选择器等）]
        compatibility: "ie7" //保留ie7及以下兼容写法 类型：String 默认：''or'*' [启用兼容模式； 'ie7'：IE7兼容模式，'ie8'：IE8兼容模式，'*'：IE9+兼容模式]
        //keepBreaks: true, //类型：Boolean 默认：false [是否保留换行]
        //keepSpecialComments: '*' //保留所有特殊前缀 当你用autoprefixer生成的浏览器前缀，如果不加这个参数，有可能将会删除你的部分前缀
    };
    return gulp
        .src(["./public/**/*.css", "!./public/**/*.min.css"])
        .pipe(gulpif(!isScriptAll, changed("./public")))
        .pipe(gulpif(isDebug, debug({
            title: "Compress CSS:"
        })))
        .pipe(plumber())
        .pipe(cleancss(option))
        .pipe(gulp.dest("./public"));
});

gulp.task("compressHtml", function () {
    var cleanOptions = {
        protect: /<\!--%fooTemplate\b.*?%-->/g,
        unprotect: /<script [^>]*\btype="text\/x-handlebars-template"[\s\S]+?<\/script>/gi
    };
    var minOption = {
        collapseWhitespace: true,
        collapseBooleanAttributes: true,
        removeEmptyAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        removeComments: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
    };
    return gulp
        .src("./public/**/*.html")
        .pipe(gulpif(isDebug, debug({
            title: "Compress HTML:"
        })))
        .pipe(plumber())
        .pipe(htmlclean(cleanOptions))
        .pipe(htmlmin(minOption))
        .pipe(gulp.dest("./public"));
});


gulp.task("compressImage", function () {
    var option = {
        optimizationLevel: 5,
        progressive: true,
        interlaced: false,
        multipass: false
    };
    return gulp
        .src("./public/medias/**/*.*")
        .pipe(gulpif(!isScriptAll, changed("./public/medias")))
        .pipe(gulpif(isDebug, debug({
            title: "Compress Images:"
        })))
        .pipe(plumber())
        .pipe(imagemin(option))
        .pipe(gulp.dest("./public"));
});

gulp.task(
    "build",
    gulp.series(
        "clean",
        "generate",
        "compressHtml",
        "compressCss",
        "compressJs",
        "compressImage",
        gulp.parallel("deploy")
    )
);


gulp.task(
    "default",
    gulp.series(
        "clean",
        "generate",
        gulp.parallel("compressHtml", "compressCss", "compressJs", "compressImage")
    )
);
