var $ = window.jQuery = require('jquery');
var Materialize = require('materialize-css');
require('../../node_modules/materialize-css/js/sideNav.js');
require('../../node_modules/materialize-css/js/parallax.js');
require('../../node_modules/materialize-css/js/carousel.js');
require('../../node_modules/materialize-css/js/cards.js');
require('../../node_modules/materialize-css/js/collapsible.js');
require('../../node_modules/materialize-css/js/modal.js');
require('../../node_modules/materialize-css/js/materialbox.js');
require('../../node_modules/materialize-css/js/tooltip.js');
var slick = require('slick-carousel');
//require('../../node_modules/slick-carousel/slick/slick.js');

(function($){
  $(function(){

    $('.slicked-car').slick({

      infinite: true,
      speed: 300,
      //fade: true,
      //centerPadding: '60px',
      slidesToShow: 1,
      slideToScroll:1,
      centerMode: true,
      variableWidth: true,
      adaptiveHeight: true,
      settings: {
      arrows: true,
    },
      // normal options...

      // the magic
      responsive: [{

      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        infinite: true
      }

    }, {

      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        //dots: true
      }

    }, {

      breakpoint: 300,
      settings: "unslick" // destroys slick

    }]
  });
    //  $('.carousel.carousel-slider').carousel({fullWidth: true});
    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.materialbox').materialbox();
    $('.carousel').carousel();
    $('.tooltipped').tooltip();
    //$('.cards').cards();
    $('.collapsible').collapsible();
    $('.modal').modal();
    //$('.modal-trigger').leanModal();
    // Next slide
    $('.carousel').carousel('next');
    $('.carousel').carousel('next', 3); // Move next n times.
    // Previous slide
    $('.carousel').carousel('prev');
    $('.carousel').carousel('prev', 4); // Move prev n times.
    // Set to nth slide
    $('.carousel').carousel('set', 4);

    $(document).on('click', '.nav-wrapper a', function(e){
      e.preventDefault();
      $('html, body').animate({
          scrollTop: $( $.attr(this, 'href') ).offset().top
      }, 1000);
    });

  }); // end of document ready
})(jQuery);
