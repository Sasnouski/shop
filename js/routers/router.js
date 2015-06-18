

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
            Backbone.history.start();
        },
        setPhones: function (){
            if (this.view) {
                this.view.paginationView.vent._events = [];
                this.view.$el.empty().off();
                this.view.paginationView.$el.empty().off();
                console.log('view cleared');
            }
            this.view = new PhonesView({vent: vent});
            console.log('phones view created');
            $("[href='#phones']").addClass('active');
        },
        setTablets: function (){
            if (this.view) {
                this.view.paginationView.vent._events = [];
                this.view.$el.empty().off();
                this.view.paginationView.$el.empty().off();
                console.log('view cleared');
            }
            this.view = new TabletsView({vent: vent});
            console.log('tablets view created');
            $("[href='#tablets']").addClass('active');
        },
        setCameras: function(){
            if (this.view) {
                this.view.paginationView.vent._events = [];
                this.view.$el.empty().off();
                this.view.paginationView.$el.empty().off();
                console.log('view cleared');
            }
            this.view = new CamerasView({vent: vent});
            console.log('cameras view created');
            $("[href='#cameras']").addClass('active');
        }

    });
    return Router;

});
