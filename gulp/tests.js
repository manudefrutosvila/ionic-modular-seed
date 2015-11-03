// 'use strict';
//
// var gulp = require('gulp'),
//     shell = require('gulp-shell'),
//     Q = require('q');
//
// gulp.task('unitTest', shell.task([
//   'node_modules/karma/bin/karma start --singleRun=false test/karma.conf.js'
// ]));
// gulp.task('unitTestSingleRun', shell.task([
//   'node_modules/karma/bin/karma start --singleRun=true test/karma.conf.js'
// ]));
//
//
// gulp.task('seleniumInit', shell.task([
//   'node_modules/protractor/bin/webdriver-manager update'
// ]));
//
//
// gulp.task('seleniumStart',function(){
//     gulp.src('')
//         .pipe(shell('node_modules/protractor/bin/webdriver-manager start'));
//         var deferred = Q.defer();
//         setTimeout(function() {
//             deferred.resolve('nice');
//         }, 2000);
//
//         return deferred.promise;
//
// });
//
// gulp.task('e2eTest', ['seleniumInit'],shell.task([
//     'node_modules/protractor/bin/protractor test/protractor.config.js'
// ],{ignoreErrors:false}));
//
// gulp.task('e2eTestDebug', ['seleniumInit'],shell.task([
//     'node_modules/protractor/bin/protractor debug test/protractor.config.js'
// ],{ignoreErrors:false}));
//
//
// gulp.task('elementor',['seleniumStart'] ,
//     shell.task( 'elementor http://localhost:8100'));
