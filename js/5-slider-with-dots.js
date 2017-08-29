'use strict';

document.addEventListener('DOMContentLoaded', function() {

  var items = document.querySelectorAll('.slider li');
  var dots = document.querySelectorAll('.dot');
  var dot1 = document.getElementById('dot1');
  var dot2 = document.getElementById('dot2');
  var dot3 = document.getElementById('dot3');

  dot1.addEventListener('click', function() {
    for (var i = 0; i < items.length; i++) {
      items[i].classList.remove('visible');
      dots[i].classList.remove('active');
    };
    this.classList.add('active');
    items[0].classList.add('visible');
  });

  dot2.addEventListener('click', function() {
    for (var i = 0; i < items.length; i++) {
      items[i].classList.remove('visible');
      dots[i].classList.remove('active');
    };
    this.classList.add('active');
    items[1].classList.add('visible');
  });

  dot3.addEventListener('click', function() {
    for (var i = 0; i < items.length; i++) {
      items[i].classList.remove('visible');
      dots[i].classList.remove('active');
    };
    this.classList.add('active');
    items[2].classList.add('visible');
  });

});
