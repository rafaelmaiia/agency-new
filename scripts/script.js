$(document).ready(function(){

    $('#nav-toggle').click(function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $('.header-collapse').toggleClass('active');
    });
});

// Carousel Principal
$('.owl-carousel').owlCarousel({
    items:1,
    lazyLoad:true,
    loop:true,
    margin:10
});