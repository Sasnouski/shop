

define([
    'jquery',
    'underscore',
    'backbone',
    'vent',
    'views/phonesView',
    'views/detailedPhoneView',
    'views/tabletsView',
    'views/detailedTabletView',
    'views/camerasView',
    'views/detailedCameraView'
], function( $, _, Backbone, vent, PhonesView, DetailedPhone, TabletsView, DetailedTablet, CamerasView, DetailedCamera){

    var Router = Backbone.Router.extend({
        routes: {
                      '' : 'setPhones',
                'phones' : 'setPhones',
     'phones/:itemTitle' : 'setPhone',
               'tablets' : 'setTablets',
    'tablets/:itemTitle' : 'setTablet',
               'cameras' : 'setCameras',
     'cameras/:itemTitle' : 'setCamera'
        },
        initialize: function() {
            Backbone.history.start();
        },
        setPhones: function (){

            //if(this.view == undefined){
            //    this.view = new PhonesView({ vent: vent });
            //}
            //else if(this.view.hasOwnProperty('paginationView')){
            //    this.view.paginationView.vent._events = [];
            //    this.view.$el.empty().off();
            //    this.view.paginationView.$el.empty().off();
            //    this.view = new PhonesView({ vent: vent });
            //}
            //else {
            //    this.view.$el.remove();
            //}

            if( this.view  && this.view.vent ) {
                this.view.paginationView.vent._events = [];
                this.view.$el.empty().off();
                this.view.paginationView.$el.empty().off();
            }
            else if( this.view ){
                this.view.$el.empty();
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
        },
        setTablets: function (){
            if ( this.view && this.view.vent ) {
                this.view.paginationView.vent._events = [];
                this.view.$el.empty().off();
                this.view.paginationView.$el.empty().off();
            }
            else if( this.view ){
                this.view.$el.empty();
            }
            this.view = new TabletsView({ vent: vent });
        },
        setTablet: function(itemTitle){
            if ( this.view ){
                this.view.paginationView.vent._events = [];
                this.view.paginationView.$el.empty().off();
                this.view.$el.empty().off();
            }
            this.view = new DetailedTablet(itemTitle);
            $('#section').append( this.view.render().el );
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
        },
        setCamera: function(itemTitle){
            if ( this.view ){
                this.view.paginationView.vent._events = [];
                this.view.paginationView.$el.empty().off();
                this.view.$el.empty().off();
            }
            this.view = new DetailedCamera(itemTitle);
            $('#section').append( this.view.render().el );
        }

    });
    return Router;

});
