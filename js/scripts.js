//BUSINESS LOGIC
var emptyList = [];





// USER LOGIC
$(document).ready(function() {
  $("form#to-do").submit(function(event) {
    event.preventDefault();
    var toDoItem = ("input#toDo1").val();
    emptyList.push(toDoItem);
    var toDoList = emptyList.map(function(toDoItem) {
      return "<li>" + toDoItem + "</li>";
    });
    $("#displayList").text(displayList);
  });
});
