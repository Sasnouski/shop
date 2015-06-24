

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
                console.log('view cleared');
            }
            else if(this.view){
                this.view.$el.empty().off();
            }
            this.view = new PhonesView({vent: vent});
            $("[href='#phones']").addClass('active');
        },
        setPhone: function(itemTitle){
            var phonesCollection = this.view.collection;
            if (this.view){
                this.view.$el.empty().off();
                this.view.paginationView.$el.empty().off();
                $('aside').hide();
            }
            var phone = phonesCollection.where({itemTitle: itemTitle});
            this.view = new DetailedPhone({model: phone});
            $('#section').append(this.view.render().el);
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
