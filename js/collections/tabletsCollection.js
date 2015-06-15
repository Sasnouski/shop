

define([
    'underscore',
    'backbone',
    'models/itemModel'

], function(_, Backbone, Item) {
    var Tablets = Backbone.Collection.extend({
        model: Item,
        url:'json/tablets.json',
        perPage: 20
    });
    return Tablets;

});