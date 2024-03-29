$(function () {
    "use strict";
    //slider 
   var winH   = $(window).height(),
       upperH = $('.upper-bar').innerHeight(),
       navH   = $('.navbar').innerHeight();
    $('.slider, .carousel-item').height(winH - ( upperH + navH ));

    //feature work shuffle
    $('.featured-work ul li').on('click', function(){
        $(this).addClass('active').siblings().removeClass('active');
        if ($(this).data('class') === 'all')
        {
            $('.shuffle-image .col-sm').css('opacity', 1);
        }else {
            $('.shuffle-image .col-sm').css('opacity', 0.3);
            $($(this).data('class')).parent().css('opacity', 1);
        }
    })
});