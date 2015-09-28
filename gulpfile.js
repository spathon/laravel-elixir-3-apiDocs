(function(){
   'use strict';
    var elixir = require('laravel-elixir');
    require('laravel-elixir-3-apidocs');

    elixir(function (mix) {
        mix.apiDocs();
    });
}())
