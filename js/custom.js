/*=========================================
Wow animation js
==========================================*/
jQuery(function ($) {
    wow = new WOW({
        animateClass: 'animated',
        offset: 100
    });
    wow.init();
});

/*=========================================
Page preloader
==========================================*/
function preloader() {
    $(() => {
        setInterval(() => {
            let p = $('.preloader');

            p.css('opacity', 0);

            setInterval(
                () => p.remove(),
                parseInt(p.css('1000'))
            );
        }, 1000);
    });
}
setInterval(() => preloader(), 1000);

/*=========================================
Banner image-Slider
==========================================*/
$('.slider-area').owlCarousel({
    loop: true,
    autoplay: false,
    autoplayHoverPause: false,
    autoplayTimeout: 5000,
    animateOut: 'fadeOut',
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})
$('.play').on('click', function () {
    owl.trigger('play.owl.autoplay', [4000])
})
$('.stop').on('click', function () {
    owl.trigger('stop.owl.autoplay')
})

/*=========================================
Active navigation when scrolling
==========================================*/
function onScroll(event) {
    var scrollPosition = $(document).scrollTop();
    $('nav ul li a').each(function () {
        var currentLink = $(this);
        var refElement = $(currentLink.attr("href"));
        if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
            $('nav ul li a').removeClass("focus");
            currentLink.addClass("focus");
        } else {
            currentLink.removeClass("focus");
        }
    });
}

/*=========================================
Sticky navigation
==========================================*/
$(window).scroll(function () {
    if ($(document).scrollTop() > 15) {
        $('.navbar').addClass('shrink');
    } else {
        $('.navbar').removeClass('shrink');
    }
});

/*=========================================
Shrink-img
==========================================*/
$(function () { 
    $(window).scroll(function () {
        if ($(this).scrollTop() > 20) { 
            $('.navbar-brand-img img').attr('src','images/logo-shrink.png');
        }
        if ($(this).scrollTop() < 20) { 
            $('.navbar-brand-img img').attr('src','images/logo.png');
        }
    })
});

/*=========================================
Author image hover effect
==========================================*/
$(".author").hover3d({
    selector: ".author-card",
    shine: false,
});

$(".author").hover3d({
    // selector for element
    selector: null,

    // Perspective value for 3d space
    perspective: 1000,

    // Mouse movement sensitivity
    sensitivity: 20,

    // Default behavior is the element will follow the mouse, look like it facing the mouse
    invert: false,

    // Add shining layer
    shine: false,

    // Helper class when mouse hover in the element
    hoverInClass: "hover-in",

    // Helper class when mouse hover Out the element
    hoverOutClass: "hover-out",

    // Helper class when the mouse is hovering the element
    hoverClass: "hover-3d"
});


/*=========================================
Skill progress-bar
==========================================*/
$('.skillbar').each(function () {
    $(this).find('.skillbar-bar').animate({
        width: $(this).attr('data-percent')
    }, 6000);
});

/*=========================================
Portfolio item filtering
==========================================*/
var $grid = $('.portfolio-element').isotope({
    animationOptions: {
        duration: 750,
        easing: 'linear',
        queue: false
    }
});

// filter items on button click
$('.portfolio-filter').on('click', 'li', function () {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({
        filter: filterValue
    });
});

// filter items active
$('.portfolio-filter').on('click', 'li', function () {
    $(this).addClass('active').siblings().removeClass('active');
});

/*=========================================
Auto counting
==========================================*/
$('.count').countTo();

/*=========================================
Client testimonial slider
==========================================*/
$('.client-testimonial').owlCarousel({
    loop: true,
    autoplay: true,
    smartSpeed: 3000,
    autoplayHoverPause: false,
    autoplayTimeout: 5000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 2
        }
    }
})
$('.play').on('click', function () {
    owl.trigger('play.owl.autoplay', [4000])
})
$('.stop').on('click', function () {
    owl.trigger('stop.owl.autoplay')
})

