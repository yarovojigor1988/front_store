$(document).ready(function(){
    $('.carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: false,
        arrows: true,
        аccessibility: false
    });

    $('.service_carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        dots: true,
        arrows: false,
        аccessibility: false,
        initialSlide: 1,
        speed: 500,
        fade: true,
        swipe: false,
        cssEase: 'linear'
    });

    $('.cafe_slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        dots: true,
        arrows: false,
        аccessibility: false
    });

    


    $('.advantages_section').mouseenter(function(){
        $(this).find(".advantages_img-border").addClass("rotate_45");
        $(this).find(".advantages_title").addClass("color_orange");
    });

    $('.advantages_section').mouseleave(function(){
        $(this).find(".advantages_img-border").removeClass("rotate_45")
        $(this).find(".advantages_title").removeClass("color_orange");

    });

    $('.img_box').mouseenter(function(){
        $(this).find(".portfolio_box-content").addClass("display_block");
    });

    $('.img_box').mouseleave(function(){
        $(this).find(".portfolio_box-content").removeClass("display_block")

    });

    $('.team_content-item').mouseenter(function(){
        $(this).find(".team_content-text").addClass("display_block");
        $(this).find(".team_content-img").addClass("display_block");
        $(this).find(".team_content-img").addClass("big_img");


    });

    $('.team_content-item').mouseleave(function(){
        $(this).find(".team_content-text").removeClass("display_block")
        $(this).find(".team_content-img").removeClass("display_block");
        $(this).find(".team_content-img").removeClass("big_img");

    });


});

$(document).on('click', '.tabs_nav-link', function(e){
    e.preventDefault();
    var tabId = $(this).attr('href');
    $(this).addClass('active');
    $(this).parent('li').siblings().find('.tabs_nav-link').removeClass('active');
    $(tabId).show(400);
    $(tabId).siblings('.tabs_tab').hide(400);
});