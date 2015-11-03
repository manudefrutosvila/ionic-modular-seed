// 'use strict';
//
// var gulp = require('gulp'),
//     path = require('path'),
//     extend = require('node.extend'),
//     templateEngine = require('../templateEngine/templateEngine');
//
// gulp.task('createView',function(){
//     var readline = require('readline');
//
//     var rl = readline.createInterface({
//         input: process.stdin,
//         output: process.stdout
//     });
//
//     var module = {};
//
//     rl.question('Write the module view name  ', function(answer) {
//         module.name = answer;
//
//         rl.question('Write the Controller view name  ', function(answer) {
//             var config = {
//                 moduleName : module.name,
//                 controllerName: answer,
//                 fileName : '',
//                 template : '',
//                 targetPath: path.resolve(__dirname, '../www', 'src')
//             };
//
//             var templatesConfig = [
//                 { fileName : module.name+'.ctrl.js',
//                 template : './templateEngine/view/view1.ctrl.js.tpl' },
//                 { fileName :'config.route.js',
//                 template : './templateEngine/view/config.route.js.tpl' },
//                 { fileName : module.name+'.html',
//                 template : './templateEngine/view/view1.html.tpl' },
//                 { fileName : module.name+'.module.js',
//                 template : './templateEngine/view/view1.module.js.tpl' },
//                 { fileName : module.name+'.service.js',
//                 template : './templateEngine/view/view1.service.js.tpl' }
//             ];
//
//             templatesConfig.forEach(function(detailConfig){
//                 extend(config,detailConfig);
//                 var engine = templateEngine(config);
//                 engine.generateView();
//             });
//             rl.close();
//         });
//     });
// });
