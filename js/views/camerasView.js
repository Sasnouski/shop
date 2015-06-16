

define([
    'jquery',
    'underscore',
    'backbone',
    'vent',
    'collections/camerasCollection',
    'views/itemView',
    'views/paginationView'
], function($, _, Backbone, vent, Cameras, ItemView, PaginationView) {

    var CamerasView = Backbone.View.extend({
        el: '#content',
        initialize: function( options ) {
            //this.listenTo(this.collection, "reset", this.paginationView.remove());
            _.bindAll(this, "renderClicked");
            options.vent.bind("renderClicked", this.renderClicked);
            this.collection =  new Cameras( options.cameras );
            this.camerasPaginationView =  new PaginationView({vent: vent});
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
            //if(Backbone.history.fragment != 'cameras'){
            //    return false;
            //}

            this.pages[e].each(function( item ) {
                this.renderItem( item );
            }, this );
            console.log('cameras rendered');
            return this;
        },
        renderItem: function( item ) {
            var cameraView = new ItemView({
                model: item
            });
            this.$el.append( cameraView.render().el );
        },
        renderClicked: function (index, type) {
            if(type != 'cameras'){
                return;
            }
            if ($('#content').html() != '') {
                $('#content').children('article').remove();
            }
            this.render(index-1);
        },
        renderPagination: function(){
            this.camerasPaginationView.render(this.iterationCount);
            console.log('pagination rendered');
            $('.pagination ').attr("href", "#cameras");
            $('.pagination ').data("type", "cameras");
            console.log('href changed to cameras');
        }
    });
    return CamerasView;

});