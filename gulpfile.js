
var gulp = require('gulp');
var path = require("path");
var Builder = require('systemjs-builder');
// https://blog.angular-university.io/how-to-create-an-angular-2-library-and-how-to-consume-it-jspm-vs-webpack/
gulp.task('build', function(){
    var builder = new Builder('./');
    // builder.buildStatic('src/dynaform.module.js', './outfile.js',
    // {
    //     minify: true,
    //     sourceMaps: true,
    //     // config: cfg
    // })
    
    var builder = new Builder();
        builder.loadConfig('systemjs.config.js', false, false);

        return builder.bundle('lib/dynaform.module.js', 'dist/dynaform.module.min.js', {
          format: 'umd',
          minify: true,
          mangle: true
        })
    .then(function(err,result) {
        // console.log(err);
        // console.log(result);
    });
    
  });


gulp.task('default', [ 'build']);