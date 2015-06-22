

define([
    'jquery',
    'underscore',
    'backbone',
    'vent',
    'views/phonesView',
    'views/detailedPhoneView',
    'views/tabletsView',
    'views/camerasView'
], function( $, _, Backbone, vent, PhonesView, DetailedPhone, TabletsView, CamerasView ){

    var Router = Backbone.Router.extend({
        routes: {
                  '' : 'setPhones',
            'phones' : 'setPhones',
            'phones/:itemTitle' : 'setPhone',
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
        setPhone: function(){
            if (this.view){
                this.view.$el.empty().off();
                this.view.paginationView.$el.empty().off();
                $('aside').hide();
            }
            this.view = new DetailedPhone();

            console.log(this.view);
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
