

define([
    'jquery',
    'underscore',
    'backbone',
    'vent',
    'collections/tabletsCollection',
    'views/itemView',
    'views/paginationView'
], function($, _, Backbone, vent, Tablets, ItemView, PaginationView) {

    var TabletsView = Backbone.View.extend({
        el: '#content',
        initialize: function( options ) {
            this.on('all', function(eventName){
                console.log('TableView: ' + eventName);
            });
            _.bindAll(this, "renderClicked");
            options.vent.bind("renderClicked", this.renderClicked);
            this.collection =  new Tablets( options.tablets );
            this.paginationView =  new PaginationView({vent: vent});
            console.log('pagination view created');
            options.vent.trigger("pagesCounted", this.iterationCount);
            var that = this;
            this.collection.fetch({
                success: function () {
                    that.calculateCount();
                    that.render(0);
                    that.renderPagination();
                }
            });

        },
        calculateCount: function () {
            this.pages = [];
            this.iterationCount = Math.ceil(this.collection.length/this.collection.perPage);
            console.log(this.iterationCount);
            for( var i=0; i<this.iterationCount; i++){
                var tempCollection = jQuery.extend(true, {}, this.collection);
                tempCollection.models = tempCollection.models.slice( i*this.collection.perPage, i*this.collection.perPage + this.collection.perPage );
                this.pages.push( tempCollection );
            }
        },
        render: function(e) {
            //console.log(Backbone.history.fragment);
            //if(Backbone.history.fragment != 'tablets'){
            //    return false;
            //}

            this.pages[e].each(function( item ) {
                this.renderItem( item );
            }, this );
            console.log('tablets rendered');
            return this;

        },
        renderItem: function( item ) {
            var itemView = new ItemView({
                model: item
            });
            this.$el.append( itemView.render().el );
        },
        renderClicked: function (index, type) {
            if(type != 'tablets'){
                return;
            }
            if ($('#content').html() != '') {
                $('#content').children('article').remove();
            }
            this.render(index-1);

        },
        renderPagination: function(){
            this.paginationView.render(this.iterationCount);
            console.log('pagination rendered');
            $('.pagination ').attr("href", "#tablets");
            $('.pagination ').data("type", "tablets");
            console.log('href changed to tablets');
        }

    });
    return TabletsView;

});