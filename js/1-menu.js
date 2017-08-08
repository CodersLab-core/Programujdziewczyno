'use strict';

document.addEventListener('DOMContentLoaded', function() {

  //Dropdown menu in navigation
  var elementWithDropdown = document.querySelector('.for-dropdown');
  var dropdown = document.querySelector('.dropdown');

  elementWithDropdown.addEventListener('mouseover', function() {
    dropdown.style.display = "block";
  }); 

  elementWithDropdown.addEventListener('mouseout', function() {
    dropdown.style.display = "none";
  });
});