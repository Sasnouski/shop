

define([
    'jquery',
    'underscore',
    'backbone',
    'collections/phonesCollection',
    'handlebars',
    'text!templates/singlePhoneView.hbs'
], function($, _, Backbone, Phones, Handlebars, Template) {

    var DetailedPhone = Backbone.View.extend({
        tagName: 'div',
        id:'detailed',
        template: Handlebars.compile( Template ),
        initialize: function(itemTitle) {
            var that = this;
            this.collection =  new Phones( );
            this.collection.fetch({
                success: function() {
                    var phonesCollection = that.collection;
                    that.phone = phonesCollection.where({ itemTitle: itemTitle });
                    that.render();
                }
            });
        },
        render: function() {
            $('aside').fadeOut('slow');
            _.map($('table tr td'), function( el ){
                if(el.innerHTML == ''){
                    el.style.display = 'none';
                }
            });
            if(this.phone){
                this.$el.html( this.template( this.phone[0].toJSON() ));
            }
            return this;
        }
    });
    return DetailedPhone;

});