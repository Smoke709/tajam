jQuery(function ($) {
    //ham-burger navbar
    burger = document.querySelector('.burger');
    header = document.querySelector('.header');
    logo = document.querySelector('.logo');
    navlist = document.querySelector('.nav-list');



    burger.addEventListener('click', () => {
        header.classList.toggle('nav-bar-resp');
        logo.classList.toggle('resp-nav');
        navlist.classList.toggle('resp-nav');
    });

    // hide navbar on scroll
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.querySelector(".header-section").style.top = "0";
      } else {
        document.querySelector(".header-section").style.top = "-60px";
      }
      prevScrollpos = currentScrollPos;
    }

    //Slick slider init for the banner slider
    $('.banner-section-container').slick({
        dots: true,
        infinite: true,
        speed: 700,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
    
    //slick slider init fo review 
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        // fade: true,
        asNavFor: '.slider-nav'
      });
      $('.slider-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        centerMode: true,
        centerPadding: 0,
        focusOnSelect: true
      });
  

    //magnific popup to play video
    $('.play-icon').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
        iframe: {
            markup: 
            '<div class="mfp-iframe-scaler" >' +
                '<iframe class="mfp-iframe"  frameborder="0" allowautoplay allowfullscreen ></iframe>' +
                '</div>'
        }
       
    });

});