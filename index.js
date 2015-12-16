(function(){
    'use strict';

    var Elixir     = require('laravel-elixir');
    var gulp       = require('gulp');
    var underscore = require('underscore')
    var apidoc     = require('gulp-apidoc');
    var _          = require('underscore');
    var options    = {
        src: 'app/',
        dest: 'doc',
        watch: true
    }

    var gulpTask = function(){
        gulp.task('apiDocs', function () {
            apidoc.exec(options);
        });
    };

    Elixir.extend('apiDocs',function(opts){
        options = _.extend(options, opts);

        var apiDocsTask = new Elixir.Task('apiDocs',function(){
            gulpTask();
        });
        if(options.watch) apiDocsTask.watch(options.src + '**/*.php',gulpTask);
    })
}());
