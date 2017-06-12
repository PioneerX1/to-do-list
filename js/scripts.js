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
    var inputTaskName = $("input#task-name").val();
    var inputTaskDescription = $("input#task-description").val();
    var inputTaskDate = $("input#task-date").val();
    var newTask = new Task(inputTaskName,inputTaskDescription,inputTaskDate);

    $("ul#tasks").append("<li><span class='task'>" + newTask.taskName + "</span></li>");

  });
});
