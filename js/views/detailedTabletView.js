

define([
    'jquery',
    'underscore',
    'backbone',
    'collections/tabletsCollection',
    'handlebars',
    'text!templates/singleTabletView.hbs'
], function($, _, Backbone, Tablets, Handlebars, Template) {

    var DetailedTablet = Backbone.View.extend({
        tagName: 'div',
        id:'detailed',
        template: Handlebars.compile( Template ),
        initialize: function(itemTitle) {
            var that = this;
            this.collection =  new Tablets( );
            this.collection.fetch({
                success: function() {
                    var tabletsCollection = that.collection;
                    that.tablet = tabletsCollection.where({ itemTitle: itemTitle });
                    that.render();
                }
            });
        },
        render: function() {
            if(this.tablet){
                this.$el.html( this.template( this.tablet[0].toJSON() ));

                $('aside').hide();
                //_.map($('table tr td'), function( el ){
                //    if(el.innerHTML == ''){
                //        el.style.display = 'none';
                //    }
                //})
            }
            return this;
        }
    });
    return DetailedTablet;

});