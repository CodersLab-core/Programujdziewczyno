

'use strict';
	/*zadanie 1*/
    document.addEventListener('DOMContentLoaded', function() {
      var forDropdown = document.querySelector(".for-dropdown");
      var dropdownMenu = document.querySelector(".dropdown");

      console.log(forDropdown, dropdownMenu);
      console.log(dropdownMenu.style);

      forDropdown.addEventListener('mouseover', function() {
      	dropdownMenu.style.display = 'block'; /* 6*/

      });

      forDropdown.addEventListener('mouseout', function() {
      	dropdownMenu.style.display = 'none';
      });

/*zadanie 2*/
      var buttons = document.querySelectorAll(".read-more");
      console.log(buttons);
      console.log(buttons[0].previousElementSibling);

      
      	function showHide() {
      		var textArea = this.previousElementSibling;

      	if (textArea.style.display === 'none' || textArea.style.display === '') {

      		textArea.style.display = 'block';
      		this.innerHTML = 'MNIEJ <span class="glyphicon glyphicon-chevron-down"></span>';

      	} else {

      		textArea.style.display = 'none';
      		this.innerHTML = 'WIĘCEJ <span class="glyphicon glyphicon-chevron-down"></span>';
      	}
      	}

      	for (var i = 0; i <= buttons.length -1; i++) {
      		buttons[i].addEventListener('click', showHide);
		}

/*zadanie 3*/

		var navbar = document.querySelector(".navbar");
		console.log(navbar);

		window.addEventListener('scroll', function() {
			navbar.style.borderBottom = '1px solid #7f7f7f';
		}) 	 


/*zadanie 4*/

		var buttonComeBack = document.querySelector(".come-back");
		console.log(buttonComeBack);

		buttonComeBack.addEventListener('click', function() {
			window.scroll(0,0);
		})


/*zadanie 5*/

		var items = document.querySelectorAll(".org");
		var dots = document.querySelectorAll(".dot");
		var dot1 = document.getElementById("dot1");
		var dot2 = document.getElementById("dot2");
		var dot3 = document.getElementById("dot3");

		console.log(items);
		console.log(dots);

		dot1.addEventListener('click', function() {
			for(var i=0; i<=dots.length-1; i++) {
				dots[i].classList.remove('active');
				items[i].classList.remove('visible');
			}

			this.classList.add('active');
			items[0].classList.add('visible');
		
		})

		dot2.addEventListener('click', function() {
			for(var i=0; i<=dots.length-1; i++) {
				dots[i].classList.remove('active');
				items[i].classList.remove('visible');
			}

			this.classList.add('active');
			items[1].classList.add('visible');
		
		})


		dot3.addEventListener('click', function() {
			for(var i=0; i<=dots.length-1; i++) {
				dots[i].classList.remove('active');
				items[i].classList.remove('visible');
			}

			this.classList.add('active');
			items[2].classList.add('visible');
		
		})

	/*zadanie 6 */

	var addButton = document.querySelector(".add-task-btn");
	var tasksList = document.querySelector(".list");
	var input = document.querySelector("input");

	console.log(buttonAdd);
	console.log(listGroup);
	console.log(formControl);

	function addTask() {

		var newTask = document.createElement('li');
		newTask.innerHTML = input.value;
		tasksList.appendChild(newTask)
		input.value='';
	};

	function addTaskWithDeleteButton() {
		var deleteButton = document.createElement("button");
		var taskValue = document.createElement('div');
		var newTask = document.createElement('li');
		
		taskValue.innerHTML = input.value;
    deleteBtn.innerHTML = 'Usuń';
    deleteBtn.classList.add('delete-btn', 'btn');
    tasksList.appendChild(newTask);
    newTask.appendChild(taskValue);
    newTask.appendChild(deleteBtn);
    input.value = '';

    deleteBtn.addEventListener('click', function() {
      this.parentElement.parentNode.removeChild(this.parentElement);
    });
  }

function addTaskWithDoneBtn() {
    var newTask = document.createElement('li');
    var taskValue = document.createElement('div');
    var doneBtn = document.createElement('button');

    taskValue.innerHTML = input.value;
    doneBtn.innerHTML = 'Gotowe!'
    doneBtn.classList.add('done-btn', 'btn');
    tasksList.appendChild(newTask);
    newTask.appendChild(taskValue);
    newTask.appendChild(doneBtn);
    input.value = '';

    doneBtn.addEventListener('click', function() {
      this.previousElementSibling.style.textDecoration = 'line-through';
    })    
  }

  // Validates task before adding to the list and shows error message
  function validTaskBeforeAdding() {
    var errorMsg = document.querySelector('.error-msg');

    if (input.value === '') {
      errorMsg.classList.add('show-error-msg');      
    } else {
      errorMsg.classList.remove('show-error-msg');
      var newTask = document.createElement('li');
      newTask.innerHTML = input.value;
      tasksList.appendChild(newTask);
      input.value = '';
    }
  }






	formControl.addEventListener('click', addTask);

    });












      // tutaj będziemy umieszczać kod ze wszystkich zadań
    
