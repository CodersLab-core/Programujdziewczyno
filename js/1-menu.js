'use strict';

document.addEventListener('DOMContentLoaded', function() {

<<<<<<< HEAD
  // Dropdown menu in navigation
=======
  //Dropdown menu in navigation

>>>>>>> dropdown menu with updates
  var elementWithDropdown = document.querySelector('.for-dropdown');
  var dropdown = document.querySelector('.dropdown');

  elementWithDropdown.addEventListener('mouseover', function() {
    dropdown.style.display = 'block';
  }); 

  elementWithDropdown.addEventListener('mouseout', function() {
    dropdown.style.display = 'none';
  });
});
