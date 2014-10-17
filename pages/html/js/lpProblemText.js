window.onload=function(){
  handleConceptGamification("lpProblemText");
};

$(document).ready(function(){
  $('.beerTransportNonNegContraints').on('click',function() {
    bootbox.alert($('<div></div>').load( "beerProblem/nonNegConstraints.html" ), function(result) {
    });
  });
  
  $('.beerTransportSolution').on('click',function() {
    bootbox.alert($('<div></div>').load( "beerProblem/fullSolution.html" ), function(result) {
    });
  });
  
  $('.beerTransportConstraints').on('click',function() {
    bootbox.alert($('<div></div>').load( "beerProblem/constraints.html" ), function(result) {
    });
  });
  
  $('.beerTransportObjectiveFunction').on('click',function() {
    bootbox.alert($('<div></div>').load( "beerProblem/objectiveFunction.html" ), function(result) {
    });
  });
  
  $('.beerTransportDecisionVariables').on('click',function() {
    bootbox.alert($('<div></div>').load( "beerProblem/decisionVariables.html" ), function(result) {
    });
  });
});