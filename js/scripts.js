// BUSINESS LOGIC

function Task(taskName, taskDescription, taskDate) {
  this.taskName = taskName;
  this.taskDescription = taskDescription;
  this.taskDate = taskDate;
}

// USER INTERFACE LOGIC
$(document).ready(function() {
  $("form#task-form").submit(function(event) {
    event.preventDefault();
    alert('js called');

  });
});
