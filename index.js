(function(){
    'use strict';

    var Elixir     = require('laravel-elixir');
    var gulp       = require('gulp');
    var underscore = require('underscore')
    var apidoc     = require('gulp-apidoc');
    var _          = require('underscore');
    var options    = {
        src: 'app/',
        dest: 'doc'
    }

    var gulpTask = function(){
        gulp.task('apiDocs', function () {
            apidoc.exec(options);
        });
    };

    Elixir.extend('apiDocs',function(opts){
        options = _.extend(options, opts);

        new Elixir.Task('apiDocs',function(){
            gulpTask();
        }).watch(options.src,gulpTask);
    })
}());