

define([
    'underscore',
    'backbone',
    'models/itemModel'

], function(_, Backbone, Item) {

    var Cameras = Backbone.Collection.extend({
        model: Item,
        url:'json/cameras.json',
        perPage: 30
    });
    return Cameras;

});