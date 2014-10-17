var messageOnCorrectAnswer = "Your answer is correct.";
var messageOnIncorrectAnswer = "Your answer is incorrect. Try again...";

$(document).ready(function(){
  $('.busProblem').on('click',function() {
    bootbox.alert($('<div></div>').load( "modelingLPProblem/busProblem.html" ), function(result) {
    });
  });
});

$(document).ready(function(){
  $('.chairProblem').on('click',function() {
    bootbox.alert($('<div></div>').load( "modelingLPProblem/chairProblem.html" ), function(result) {
    });
  });
});

$(document).ready(function(){
  $('.showChipsModel').on('click',function() {
    $('.chipsModel').slideToggle();
  });
});

$(document).ready(function(){
  $('.notationExplanation').on('click',function() {
    bootbox.alert($('<div></div>').load( "modelingLPProblem/notationExplanation.html" ), function(result) {
    });
  });
});
