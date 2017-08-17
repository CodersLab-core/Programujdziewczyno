'use strict';

document.addEventListener('DOMContentLoaded', function() {

  var addTaskBtn = document.querySelector('.add-task-btn');
  var tasksList = document.querySelector('.list');
  var input = document.querySelector('input');
  
  // Adds task as simple list item
  function addTask() {
    var newTask = document.createElement('li');
    newTask.innerHTML = input.value;
    tasksList.appendChild(newTask);
    input.value = '';
  }

  // Adds task with delete button
  function addTaskWithDelBtn() {
    var newTask = document.createElement('li');
    var taskValue = document.createElement('div');
    var deleteBtn = document.createElement('button');

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

  // Adds task with done button
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

  // Pass applicable function as a callback below
  addTaskBtn.addEventListener('click', addTask);
});
