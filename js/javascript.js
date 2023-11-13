const getSliderLastItem = (owl) => {
    if ($(window).width() > 1200) {
        owl.each(function() {
            let total = $(this).find('.owl-item.active').length;
            $(this).find('.owl-item').removeClass('opacity-25');
            $(this).find('.owl-item.active').each(function(index) {
                if (index === total - 1 && total > 1) {
                    $(this).addClass('opacity-25')
                }
            })
        })
    }
}
const fixNewsControls = () => {
    if ($(window).width() > 1200) {
        let item = $(".owl-banner-news .owl-item").width() + 75;
        $(".news-slider-controls").css("right", item + "px");
    }
}

$(document).ready(function () {

    Fancybox.bind("[data-fancybox]", {});

    const owlHome = $('.owl-banner-home').owlCarousel({
        items:1,
        loop:false,
        rewind:true,
        navText:['<svg xmlns="http://www.w3.org/2000/svg" version="1.2" viewBox="0 0 13 8" width="13" height="8"><g id="Menu-top"><path id="-e-icon-arrow-default" class="s0" d="m7 7.4l5-4.9c0.4-0.4 0.4-1.1 0-1.5-0.4-0.4-1.1-0.4-1.5 0l-4.2 4.2-4.3-4.2c-0.4-0.4-1-0.4-1.4 0-0.3 0.2-0.4 0.5-0.4 0.7 0 0.3 0.1 0.6 0.4 0.8l4.9 4.9c0.2 0.2 0.5 0.3 0.8 0.3 0.2 0 0.5-0.1 0.7-0.3z"/></g></svg>','<svg xmlns="http://www.w3.org/2000/svg" version="1.2" viewBox="0 0 13 8" width="13" height="8"><g id="Menu-top"><path id="-e-icon-arrow-default" class="s0" d="m7 7.4l5-4.9c0.4-0.4 0.4-1.1 0-1.5-0.4-0.4-1.1-0.4-1.5 0l-4.2 4.2-4.3-4.2c-0.4-0.4-1-0.4-1.4 0-0.3 0.2-0.4 0.5-0.4 0.7 0 0.3 0.1 0.6 0.4 0.8l4.9 4.9c0.2 0.2 0.5 0.3 0.8 0.3 0.2 0 0.5-0.1 0.7-0.3z"/></g></svg>'],
        margin:1,
        nav: false,
        dots: false,
        autoplay:true,
        autoplayTimeout:6000,
        autoplayHoverPause:false,
    });

    $(".header-banner-controls a:first-child").click(function (e) { 
        e.preventDefault();
        owlHome.trigger('prev.owl.carousel');
    });
    $(".header-banner-controls a:last-child").click(function (e) { 
        e.preventDefault();
        owlHome.trigger('next.owl.carousel');
    });

    const owlNews = $('.owl-banner-news').owlCarousel({
        items:4,
        loop:false,
        rewind:true,
        navText:['<svg xmlns="http://www.w3.org/2000/svg" version="1.2" viewBox="0 0 13 8" width="13" height="8"><g id="Menu-top"><path id="-e-icon-arrow-default" class="s0" d="m7 7.4l5-4.9c0.4-0.4 0.4-1.1 0-1.5-0.4-0.4-1.1-0.4-1.5 0l-4.2 4.2-4.3-4.2c-0.4-0.4-1-0.4-1.4 0-0.3 0.2-0.4 0.5-0.4 0.7 0 0.3 0.1 0.6 0.4 0.8l4.9 4.9c0.2 0.2 0.5 0.3 0.8 0.3 0.2 0 0.5-0.1 0.7-0.3z"/></g></svg>','<svg xmlns="http://www.w3.org/2000/svg" version="1.2" viewBox="0 0 13 8" width="13" height="8"><g id="Menu-top"><path id="-e-icon-arrow-default" class="s0" d="m7 7.4l5-4.9c0.4-0.4 0.4-1.1 0-1.5-0.4-0.4-1.1-0.4-1.5 0l-4.2 4.2-4.3-4.2c-0.4-0.4-1-0.4-1.4 0-0.3 0.2-0.4 0.5-0.4 0.7 0 0.3 0.1 0.6 0.4 0.8l4.9 4.9c0.2 0.2 0.5 0.3 0.8 0.3 0.2 0 0.5-0.1 0.7-0.3z"/></g></svg>'],
        margin:75,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1,
                stagePadding: 25,
                margin:16,
            },
            576: {
                items: 1,
                stagePadding: 75,
                margin:40,
            },
            768: {
                items: 2,
                stagePadding: 50,
                margin:40,
            },
            993: {
                items: 3,
                margin:40,
                stagePadding: 50,
            },
            1200: {
                items: 3,
            },
            1500: {
                items: 4,
            },
            2500: {
                items: 5
            }
        }
    });

    $(".news-slider-controls a:first-child").click(function (e) { 
        e.preventDefault();
        owlNews.trigger('prev.owl.carousel');
    });
    $(".news-slider-controls a:last-child").click(function (e) { 
        e.preventDefault();
        owlNews.trigger('next.owl.carousel');
    });

    getSliderLastItem(owlNews);
    owlNews.on('translated.owl.carousel', function(event) {
        getSliderLastItem(owlNews)
    });

    setTimeout(function () {
        fixNewsControls();
    }, 250);

    $(window).resize(function () { 
        setTimeout(function () {
            getSliderLastItem(owlNews);
            fixNewsControls();
        }, 500);
    });

});

