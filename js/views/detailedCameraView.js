

define([
    'jquery',
    'underscore',
    'backbone',
    'collections/camerasCollection',
    'handlebars',
    'text!templates/singleCameraView.hbs',
    'injectCSS'
], function($, _, Backbone, Cameras, Handlebars, Template) {

    var DetailedCamera = Backbone.View.extend({
        tagName: 'div',
        id:'detailed',
        template: Handlebars.compile( Template ),
        initialize: function(itemTitle) {
            var that = this;
            this.collection =  new Cameras( );
            this.collection.fetch({
                success: function() {
                    var camerasCollection = that.collection;
                    that.camera = camerasCollection.where({ itemTitle: itemTitle });
                    that.render();
                }
            });
        },
        render: function() {
            if(this.camera){
                this.$el.html( this.template( this.camera[0].toJSON() ));

                _.map($('.singleDescr table tr td'), function( el ){
                    if(el.innerHTML == ''){
                        el.style.display = 'none';
                    }
                });
                $('aside').hide();

                $.injectCSS({
                    "#content": {
                        width: "100%"
                    }
                });
            }
            return this;
        }
    });
    return DetailedCamera;

});