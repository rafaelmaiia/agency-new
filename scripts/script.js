$(document).ready(function(){
    // menu / nav toggle
    $('#nav-toggle').click(function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $('.header-collapse').toggleClass('active');
    });

    // Variaveis
    var nav = $('.header-nav'),
        navHeight = nav.outerHeight(),
        sections = $('.section');

    // Scroll
    $(window).on('scroll', function(){
        var sTop = $(this).scrollTop();

        // fixando header
        if(sTop > navHeight){
            $('.header').addClass('fixed');
        }else{
            $('.header').removeClass('fixed');
        }

        // marcando menu scroll
        if(sTop <= 0){
            nav.find('a').removeClass('active');
            nav.find('a[href="#home"]').addClass('active');
        }else{
            sections.each(function(){
                var top = $(this).offset().top - navHeight;
    
                if(sTop >= top){
                    nav.find('a').removeClass('active');
                    nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
                }
            });
        }
        
    });

    // Carousel Principal
    $('#carousel_principal').owlCarousel({
        items:1,
        lazyLoad:true,
        loop:true,
        margin: 0,
        nav: true,
        navSpeed: 1000,
        navText: ['<i class="fa-solid fa-chevron-left"></i>','<i class="fa-solid fa-chevron-right"></i>'],
        dots: true,
        dotsSpeed: 1000,
        // autoplay: true,
        autoplaySpeed: 1000,
        responsiveRefreshRate: 10
    });

    // Carousel Testemunhas
    $('#carousel_testemunhas').owlCarousel({
        items:1,
        loop:true,
        margin: 40,
        nav: false,
        navSpeed: 1000,
        navText: ['<i class="fa-solid fa-chevron-left"></i>','<i class="fa-solid fa-chevron-right"></i>'],
        dots: true,
        dotsSpeed: 1000,
        // autoplay: true,
        autoplaySpeed: 1000,
        responsiveRefreshRate: 10,
        responsive:{
            960:{
                items: 2
            },
            1280:{
                items: 2,
                nav: true
            }
        }
    });

    // Portfolio
    $('.portfolio-nav li a').click(function(e){
        e.preventDefault();
        $('.portfolio-nav li a').removeClass('active');
        $(this).addClass('active');
        
        // Remove a classe 'visible' de todos os itens
        $('.portfolio').removeClass('visible');

        // Se for "Todos", adiciona a classe "visible" a todos os itens
        if(this.id == "all"){
            $('.portfolio').addClass('visible');
        } else{
            // Adiciona a classe "visible" apenas aos itens correspondentes à categoria
            $('.portfolio.' + this.id).addClass('visible');
        }
    });
});