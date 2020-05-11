$(document).ready(function () {
    let navbar = $('.navbar'),
        windowW = $(window),
        up = $('#up'),
        navbarLink = $('.navbar .navbar-nav li a');

    // Adapt height of Hero section
    windowW.resize(function() {
        $('.homeSlider .hero').height( windowW.height() - 120 ); 
    });
    $('.homeSlider .hero').height( windowW.height() - 120 ); 

    // Active link style
    navbarLink.click(function (e) {
        e.preventDefault();
        $(this).addClass('active_link').parent('li').siblings('li').find('a').removeClass('active_link');
    });

    //Dynamic links
    navbarLink.click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top + 1
        },1000);
    });

    windowW.scroll(function () {
        $('.block').each(function () {
            if( windowW.scrollTop() > $(this).offset().top ) {
                var blockID = $(this).attr('id');
                navbarLink.removeClass('active_link');
                $('.navbar .navbar-nav li a[data-value="' + blockID + '"]').addClass('active_link')
            }
        });
    });

    windowW.scroll(function () {
        if ($(this).scrollTop() > 400) {
            navbar.addClass('navbar_top');
            navbar.find('.navbar-brand img').css('width', '50px');
            navbar.find('ul.navbar-nav').addClass('navbar_nav_top');
        } else {
            navbar.removeClass('navbar_top');
            navbar.find('.navbar-brand img').css('width', '80px');
            navbar.find('ul.navbar-nav').removeClass('navbar_nav_top');
        }
    });

    // Main slider in top page
    $('.bxslider').bxSlider({
        mode: 'fade',
        speed: 800,
        auto: true
    });

    //up " show and hide "
    windowW.scroll(function () {
        if ($(this).scrollTop() >= 600) {
            up.fadeIn()
        } else {
            up.fadeOut()
        }
    });

    // Go to top page
    up.click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
    });

    //Validatetion inputs
    $('.contacts-info input, select, textarea').blur(function() {
        if( $(this).val() == '' ) {
            $(this).addClass('border_red');
            $('.contacts-info button').attr('disabled', 'disabled');
        } else {
            $(this).removeClass('border_red');
            $('.contacts-info button').removeAttr('disabled');
        }
    });

    //trigger wow
    new WOW().init();

    $('#myModal').modal({
        // keyboard: false
      })

    
});