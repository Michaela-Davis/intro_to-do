//BUSINESS LOGIC
var emptyList = [];

// USER LOGIC
$(document).ready(function() {
  $("form#to-do").submit(function(event) {
    event.preventDefault();

    // Get input using jQuery, you were missing the $
    var toDoItem = $("input#toDo1").val();

    emptyList.push(toDoItem);

    var toDoList = emptyList.map(function(toDoItem) {
      return "<input type='checkbox'><li>" + toDoItem + "</li>";
    });

    // I replaced .text with .html, so it "parses" the html
    $("#displayList").html(toDoList);

  });
});
