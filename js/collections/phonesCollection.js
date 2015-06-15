

define([
    'underscore',
    'backbone',
    'models/itemModel'


], function(_, Backbone, Item) {
    var Phones = Backbone.Collection.extend({
        model: Item,
        url:'json/phones.json',
        perPage: 10
    });
    return Phones;

});