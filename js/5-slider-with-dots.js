'use strict';

document.addEventListener('DOMContentLoaded', function() {

  var items = document.querySelectorAll('.slider li');
  var dots = document.querySelectorAll('.dot');
  var dot1 = document.getElementById('dot1');
  var dot2 = document.getElementById('dot2');
  var dot3 = document.getElementById('dot3');

  // Solution with separate funtion for every dot

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


  // Soluton with IIFE - comment the solution above and uncomment the below to see how it work  

  // for (var i = 0; i < dots.length; i++) {

  //   (function(index) {
  //       dots[i].addEventListener('click', function() {

  //         for (var j = 0; j < items.length; j++) {
  //           items[j].classList.remove('visible');
  //           dots[j].classList.remove('active');
  //         };

  //         items[index].classList.add('visible');
  //         dots[index].classList.add('active');
  //       });
  //   })(i);
  // }
});
