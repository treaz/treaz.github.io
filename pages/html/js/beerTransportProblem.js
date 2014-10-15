$(document).ready(function(){
  $('.beerTransportDecisionVariables').on('click',function() {
    bootbox.alert($('<div></div>').load( "beerProblem/decisionVariables.html" ), function(result) {
    });
  });
});

$(document).ready(function(){
  $('.beerTransportObjectiveFunction').on('click',function() {
    bootbox.alert($('<div></div>').load( "beerProblem/objectiveFunction.html" ), function(result) {
    });
  });
});

$(document).ready(function(){
  $('.beerTransportConstraints').on('click',function() {
    bootbox.alert($('<div></div>').load( "beerProblem/constraints.html" ), function(result) {
    });
  });
});

$(document).ready(function(){
  $('.beerTransportNonNegContraints').on('click',function() {
    bootbox.alert($('<div></div>').load( "beerProblem/nonNegConstraints.html" ), function(result) {
    });
  });
});

$(document).ready(function(){
  $('.beerTransportSolution').on('click',function() {
    bootbox.alert($('<div></div>').load( "beerProblem/fullSolution.html" ), function(result) {
    });
  });
});