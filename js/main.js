(function ($) {
    "use strict";
    
    // loader
    var loader = function () {
        setTimeout(function () {
            if ($('#loader').length > 0) {
                $('#loader').removeClass('show');
            }
        }, 1);
    };
    loader();
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    
    
    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 90) {
            $('.nav-bar').addClass('nav-sticky');
            $('.carousel, .page-header').css("margin-top", "73px");
        } else {
            $('.nav-bar').removeClass('nav-sticky');
            $('.carousel, .page-header').css("margin-top", "0");
        }
    });
    
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });

    
    // Main carousel
    $(".carousel .owl-carousel").owlCarousel({
        autoplay: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        items: 1,
        smartSpeed: 300,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ]
    });

    
    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Testimonials carousel
    $(".testimonials-carousel").owlCarousel({
        center: true,
        autoplay: true,
        smartSpeed: 2000,
        dots: true,
        loop: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
    
    // Related post carousel
    $(".related-slider").owlCarousel({
        autoplay: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            }
        }
    });
    
})(jQuery);



const images = [
  "img/IMG-20250101-WA0023.jpg",
  "img/IMG-20250101-WA0025.jpg",
  "img/IMG-20250101-WA0026.jpg",
  "img/IMG-20250101-WA0027.jpg",
  "img/IMG-20250101-WA0028.jpg",
  "img/IMG-20250101-WA0029.jpg",
  "img/IMG-20250101-WA0030.jpg",
  "img/IMG-20250101-WA0031.jpg",
  "img/IMG-20250101-WA0033.jpg",
  "img/IMG-20250101-WA0034.jpg",
  "img/IMG-20250101-WA0035.jpg",
  "img/IMG-20250101-WA0036.jpg",
  "img/IMG-20250101-WA0037.jpg",
  "img/IMG-20250101-WA0038.jpg",
  "img/IMG-20250101-WA0039.jpg",

  
];

let currentSlide = 0;
const slider = document.getElementById("fullscreen-slider");
const sliderImage = document.getElementById("slider-image");

function openSlider(index) {
  currentSlide = index;
  slider.style.display = "block";
  updateSliderImage();
  document.body.style.overflow = "hidden";
}

function closeSlider() {
  slider.style.display = "none";
  document.body.style.overflow = "auto";
}

function changeSlide(direction) {
  currentSlide = (currentSlide + direction + images.length) % images.length;
  updateSliderImage();
}

function updateSliderImage() {
  sliderImage.src = images[currentSlide];
}

// Close slider when clicking outside the image
slider.addEventListener("click", (e) => {
  if (e.target === slider) {
    closeSlider();
  }
});

// Keyboard navigation
document.addEventListener("keydown", (e) => {
  if (slider.style.display === "block") {
    if (e.key === "Escape") closeSlider();
    if (e.key === "ArrowLeft") changeSlide(-1);
    if (e.key === "ArrowRight") changeSlide(1);
  }
});

  