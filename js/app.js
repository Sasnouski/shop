

define([
    'jquery',
    'underscore'
], function( $, _ ){
    // --- fix for navigation panel
    $('nav ul li a').click(function() {
        $('nav ul li a').removeClass('active');
        $(this).addClass('active');
    });
    $('.logo').click(function(){
        $('nav ul li a').removeClass('active');

    });

});

