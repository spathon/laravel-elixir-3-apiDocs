(function(){
   'use strict';
    require('./index');
    var elixir = require('laravel-elixir');

    elixir(function (mix) {
        mix.apiDocs();
    });
}())
