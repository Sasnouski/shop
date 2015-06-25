

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

    // --- fix for table empty td
    if( $('table tr td').innerHTML == ''){
        $('table tr td').style.display="none";
    }
    //_.map($('table tr td'), function( el ){
    //    if(el.innerHTML == ''){
    //        el.style.display = 'none';
    //    }
    //})
});

