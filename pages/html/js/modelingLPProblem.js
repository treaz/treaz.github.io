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
  $('.decisionVariables').on('click',function() {
    bootbox.alert($('<div></div>').load( "dialogs/decisionVariables.html" ), function(result) {
    });
  });
});

$(document).ready(function(){
  $('.objectiveFunction').on('click',function() {
    bootbox.alert($('<div></div>').load( "dialogs/objectiveFunction.html" ), function(result) {
    });
  });
});

$(document).ready(function(){
  $('.constraints').on('click',function() {
    bootbox.alert($('<div></div>').load( "dialogs/constraints.html" ), function(result) {
    });
  });
});

$(document).ready(function(){
  $('.nonNegConstraints').on('click',function() {
    bootbox.alert($('<div></div>').load( "dialogs/nonNegConstraints.html" ), function(result) {
    });
  });
});


