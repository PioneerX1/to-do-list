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

    $("#task-list").show();
    $("ul#tasks").append("<li><span class='task'>" + newTask.taskName + "</span></li>");

    $("#task-name").val("");
    $("#task-description").val("");
    $("#task-date").val("");

    $(".task").last().click(function() {
      $("#task-info").show();
      $("#task-info h3").text(newTask.taskName);
      $("#output-description").text(newTask.taskDescription);
      $("#output-date").text(newTask.taskDate);
    });
  });
});
