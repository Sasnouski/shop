

define([
    'jquery',
    'underscore',
    'backbone',
    'handlebars',
    'text!templates/mainView.hbs'

], function($, _, Backbone, Handlebars, Template) {

    var ItemView = Backbone.View.extend({
        tagName: 'article',
        className: 'Container',
        template: Handlebars.compile( Template ),
        render: function() {
            this.$el.html( this.template( this.model.toJSON() ));
            return this;
        }
    });
    return ItemView;

});