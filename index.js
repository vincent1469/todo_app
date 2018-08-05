/*global $*/
$(document).ready(function() {
    var description = $("#new-todo-description")
    var pomodoroEstimate = $("#new-pomodoro-estimate")
    $("#add-new-todo-button").click(function(){
    $("table").append('<tr><td><input type="checkbox"></td><td><a href="show.html">' + description.val() + '</a></td><td><span class="pomodoro-estimate">1 Pomodoro</span></td></tr>')
  });
});
