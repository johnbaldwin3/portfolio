var $ = window.jQuery = require('jquery');
var Materialize = require('materialize-css');
require('../../node_modules/materialize-css/js/sideNav.js');
require('../../node_modules/materialize-css/js/parallax.js');
require('../../node_modules/materialize-css/js/carousel.js');
require('../../node_modules/materialize-css/js/cards.js');
require('../../node_modules/materialize-css/js/collapsible.js');
require('../../node_modules/materialize-css/js/modal.js');
require('../../node_modules/materialize-css/js/tooltip.js');

(function($){
  $(function(){
    //  $('.carousel.carousel-slider').carousel({fullWidth: true});
    $('.button-collapse').sideNav();
    $('.parallax').parallax();
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
