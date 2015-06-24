

define([
    'jquery',
    'underscore',
    'backbone',
    'handlebars',
    'text!templates/singlePhoneView.hbs'
], function($, _, Backbone, Handlebars, Template) {

    var DetailedPhone = Backbone.View.extend({
        tagName: 'div',
        template: Handlebars.compile( Template ),
        initialize: function( ) {
            console.log('single view initialized');
        },
        render: function() {
            this.$el.html( this.template( this.model[0].toJSON() ));
            return this;
        }
    });
    return DetailedPhone;

});