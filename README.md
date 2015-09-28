# laravel-elixir-3-apiDocs

### Documentation
At the homepage of apiDocs is the usage of the product.
To integrate this in to your project install it with npm.

    npm install laravel-elixir-3-apidocs --save

Create a apidoc.json. This file contains the options for the apidoc generator.
The specific options are specified <a href='http://apidocjs.com/#configuration'>in the apidoc documentation</a>

### Overwriting the Elixir task settings
The Elixir task can be called with the option object.
The option object can have 2 different key value pairs.

    var options = {
        src: 'app/'
        dest: 'doc'
    }
    
The options default are specified in the code example.

### Implementing this packages in a gulpfile
To use this packages you only have to require this package

    require('laravel-elixir-3-apidocs');
    
And use it like you always do

    mix.apiDocs(options); //With options
    mix.apiDocs(); //Without options. Using the defaults
