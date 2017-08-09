'use strict';

document.addEventListener('DOMContentLoaded', function() {

  // Add menu bottom border on scroll
  
  var menu = document.querySelector('.navbar');

  window.addEventListener('scroll', function() {
    menu.style.borderBottom = '.1rem solid #7f7f7f';
  });
});
