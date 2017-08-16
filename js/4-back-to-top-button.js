'use strict';

document.addEventListener('DOMContentLoaded', function() {

  // Back to top button

  var backToTopBtn = document.querySelector('.back-to-top');

  backToTopBtn.addEventListener('click', function() {
    window.scroll( 0, 0 );
  });
});
