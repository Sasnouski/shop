

define([
    'jquery',
    'underscore',
    'backbone',
    'vent'

], function($, _, Backbone, vent ) {

    var PaginationView = Backbone.View.extend({
        el: '#pagination',
        initialize: function( options ){
            _.bindAll(this, "pagesCounted");
            options.vent.bind("pagesCounted", this.pagesCounted);
            this.vent = options.vent;
        },
        render: function(iterationCount){
            $('#pagination').children().remove();
            var vars = { page:iterationCount };
            var template =  _.template( $('#pagination-view').html());
            var html = template(vars);
            this.$el.append( html );
        },
        events: {
            'click .pagination' : 'clicked'
        },
        clicked: function(e){
            e.preventDefault();
            var index = $(e.target).attr('index');
            this.vent.trigger( "renderClicked", index );
            console.log(e.target);
        },
        pagesCounted: function(iterationCount){
            this.render(iterationCount);
        }
    });
    return PaginationView;

});
