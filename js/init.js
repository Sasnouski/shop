

requirejs.config({
    baseUrl: 'js/lib',
    paths: {
        'init': '../init',
        'jquery': 'jquery-2.1.4.min',
        'backbone': 'backbone-min',
        'underscore': 'underscore-min',
        'handlebars': 'handlebars-v3.0.3',
        'vent' : '../vent',
        'text': 'text',
        'app': '../app',
        'routers': '../routers',
        'views': '../views',
        'models': '../models',
        'collections': '../collections',
        'templates': '../templates'
    },
    shim: {
        'underscore': {
            exports: '_'
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'handlebars': {
            exports: 'Handlebars'
        }
    }


});

require([
    'jquery',
    'backbone',
    'underscore',
    'routers/router',
    'app'
], function($, _, Backbone, Router){

        var marketRouter = new Router();
});