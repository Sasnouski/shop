

define([
    'jquery',
    'underscore',
    'backbone',
    'vent',
    'views/phonesView',
    'views/tabletsView',
    'views/camerasView'
], function( $, _, Backbone, vent, PhonesView, TabletsView, CamerasView ){

    var Router = Backbone.Router.extend({
        routes: {
                  '' : 'setPhones',
            'phones' : 'setPhones',
           'tablets' : 'setTablets',
           'cameras' : 'setCameras'
        },
        initialize: function() {
            console.log('router initialized');
            Backbone.history.start();
        },
        setPhones: function (){
            this.view = new PhonesView({vent: vent});
            console.log('phones view created');
            if (this.view.$el.html() != '') {
                this.view.$el.children().remove();
            }
            console.log('view cleared');
            if ($('#pagination').html() != '') {

                $('#pagination').children().remove();
                console.log('pagination removed');
            }
            $("[href='#phones']").addClass('active');
        },
        setTablets: function (){
            this.view = new TabletsView({vent: vent});
            console.log('tablets view created');
            if (this.view.$el.html() != '') {
                this.view.$el.children().remove();
            }
            console.log('view cleared');
            if ($('#pagination').html() != '') {
                $('#pagination').children().remove();
                console.log('pagination  removed');
            }
            $("[href='#tablets']").addClass('active');
        },
        setCameras: function(){
            this.view = new CamerasView({vent: vent});
            console.log('cameras view created');
            if (this.view.$el.html() != '') {
                this.view.$el.children().remove();
            }
            console.log('view cleared');
            if ($('#pagination').html() != '') {
                $('#pagination').children('ul').remove();
                console.log('pagination  removed');
            }
            $("[href='#cameras']").addClass('active');

        }
    });
    return Router;

});
