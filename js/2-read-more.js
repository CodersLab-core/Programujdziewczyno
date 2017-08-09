'use strict';

document.addEventListener('DOMContentLoaded', function() {

  // Read more/less

  var buttons = document.querySelectorAll('.read-more');

  function showHide(event) {

    var textArea = this.previousElementSibling;

    if (textArea !== null) {
      if(textArea.style.display == '' || textArea.style.display == 'none') {
        textArea.style.display = 'block';
        this.innerHTML = 'MNIEJ <span class="glyphicon glyphicon-chevron-up"></span>';
      } else {
        textArea.style.display = 'none';
        this.innerHTML = 'WIĘCEJ <span class="glyphicon glyphicon-chevron-down"></span>';
      }      
    }
  }

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', showHide);
  }
});
