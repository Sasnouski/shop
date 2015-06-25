

define([
    'jquery',
    'underscore',
    'backbone',
    'vent',
    'views/phonesView',
    'views/detailedPhoneView',
    'views/tabletsView',
    'views/camerasView'
], function( $, _, Backbone, vent, PhonesView, DetailedPhone, TabletsView, CamerasView){

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
            if( this.view && this.view.vent ) {
                this.view.paginationView.vent._events = [];
                this.view.$el.empty().off();
                this.view.paginationView.$el.empty().off();
            }
            else if( this.view ){
                this.view.$el.empty().off();
            }
            this.view = new PhonesView({ vent: vent });
        },
        setPhone: function(itemTitle){
            if ( this.view ){
                this.view.paginationView.vent._events = [];
                this.view.paginationView.$el.empty().off();
                this.view.$el.empty().off();
            }
            this.view = new DetailedPhone(itemTitle);
            $('#section').append( this.view.render().el );
            $('aside').hide();



        },
        setTablets: function (){
            if (this.view) {
                this.view.paginationView.vent._events = [];
                this.view.$el.empty().off();
                this.view.paginationView.$el.empty().off();
                console.log('view cleared');
            }
            this.view = new TabletsView({vent: vent});
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
