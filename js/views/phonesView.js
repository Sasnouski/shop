

define([
    'jquery',
    'underscore',
    'backbone',
    'vent',
    'collections/phonesCollection',
    'views/itemView',
    'views/paginationView',
    'injectCSS'
], function($, _, Backbone, vent,  Phones, ItemView, PaginationView) {

    var PhonesView = Backbone.View.extend({
        el: '#section',
        initialize: function( options ) {
            _.bindAll(this, "renderClicked");
            options.vent.bind("renderClicked", this.renderClicked);
            this.collection =  new Phones( options.phones );
            this.paginationView =  new PaginationView({vent: vent});
            console.log('pagination view created');
            options.vent.trigger("pagesCounted", this.iterationCount);
            var that = this;
            this.collection.fetch({
                success: function () {
                    console.log('fetch successful');
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
            this.pages[e].each(function( item ) {
                this.renderItem( item );
            }, this );
            console.log('phones rendered');
            // ----- jquery switching logic
            $('aside').show();
            $.injectCSS({
                "#content": {
                    width: "70%"
                }
            });
            $('.pname').each(function(){
                var partURL = $(this).attr('href');
                $(this).attr('href', '#phones/' + partURL);
            });
            // -----
            return this;
        },
        renderItem: function( item ) {
            var itemView = new ItemView({
                model: item
            });
            this.$el.append( itemView.render().el );
            $("[href='#phones']").addClass('active');
        },
        renderClicked: function (index) {
            if ($('#section').html() != '') {
                $('#section').children('article').remove();
            }
            this.render(index-1);
        },
        renderPagination: function(){
            this.paginationView.render(this.iterationCount);
            console.log('pagination rendered');
            $('.pagination ').attr("href", "#phones");
            console.log('href changed to phones');
        }
    });
    return PhonesView;

});