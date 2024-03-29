// sticky header 
$(window).scroll(function () {
    var sticky = $('.header'),
        scroll = $(window).scrollTop();

    if (scroll >= 450) sticky.addClass('sticky');
    else sticky.removeClass('sticky');
});