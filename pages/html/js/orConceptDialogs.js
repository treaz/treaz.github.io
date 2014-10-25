//13 OR concept concepts (12 in concept map + non negativvity constraints
$(document).ready(function(){
  $('.optimizationModeling').on('click',function() {
    bootbox.alert($('<div></div>').load( "dialogs/optimizationModeling.html" ), function(result) {
      handleConceptGamification("optimizationModeling");
    });
  });
  
  $('.operationsResearch').on('click',function() {
    bootbox.alert($('<div></div>').load( "dialogs/operationsResearch.html" ), function(result) {
      handleConceptGamification("operationsResearch");
    });
  });
  
  $('.mathematicalProgramming').on('click',function() {
    bootbox.alert($('<div></div>').load( "dialogs/mathematicalProgramming.html" ), function(result) {
      handleConceptGamification("mathematicalProgramming");
    });
  });
  
  $('.linearProgramming').on('click',function() {
    bootbox.alert($('<div></div>').load( "dialogs/linearProgramming.html" ), function(result) {
      handleConceptGamification("linearProgramming");
    });
  });
  
  $('.mathematicalModel').on('click',function() {
    bootbox.alert($('<div></div>').load( "dialogs/mathematicalModel.html" ), function(result) {
      handleConceptGamification("mathematicalModel");
    });
  });
  
  $('.objectiveFunction').on('click',function() {
    bootbox.alert($('<div></div>').load( "dialogs/objectiveFunction.html" ), function(result) {
      handleConceptGamification("objectiveFunction");
    });
  });
  
  $('.constraints').on('click',function() {
    bootbox.alert($('<div></div>').load( "dialogs/constraints.html" ), function(result) {
      handleConceptGamification("constraints");
    });
  });
  
  $('.solution').on('click',function() {
    bootbox.alert($('<div></div>').load( "dialogs/optimalSolution.html" ), function(result) {
      handleConceptGamification("solution");
    });
  }); 
});

$(document).ready(function(){
  $('.optimalSolution').on('click',function() {
    bootbox.alert($('<div></div>').load( "dialogs/optimalSolution.html" ), function(result) {
      handleConceptGamification("optimalSolution");
    });
  });
});

$(document).ready(function(){
  $('.feasibleSolution').on('click',function() {
    bootbox.alert($('<div></div>').load( "dialogs/optimalSolution.html" ), function(result) {
      handleConceptGamification("feasibleSolution");
    });
  });
});

$(document).ready(function(){
  $('.parameters').on('click',function() {
    bootbox.alert($('<div></div>').load( "dialogs/parameters.html" ), function(result) {
      handleConceptGamification("parameters");
    });
  });
});

$(document).ready(function(){
  $('.decisionVariables').on('click',function() {
    bootbox.alert($('<div></div>').load( "dialogs/decisionVariables.html" ), function(result) {
      handleConceptGamification("decisionVariables");
    });
  });
});

$(document).ready(function(){
  $('.nonNegConstraints').on('click',function() {
    bootbox.alert($('<div></div>').load( "dialogs/nonNegConstraints.html" ), function(result) {
      handleConceptGamification("nonNegConstraints");
    });
  });
});

//graphical concepts
$(document).ready(function(){
  $('.objectiveFunctionContour').on('click',function() {
    bootbox.alert($('<div></div>').load( "dialogs/objectiveFunctionContour.html" ), function(result) {
      handleConceptGamification("objectiveFunctionContour");
    });
  });
});

$(document).ready(function(){
  $('.optimalSolutionGraphical').on('click',function() {
    bootbox.alert($('<div></div>').load( "dialogs/optimalSolutionGraphical.html" ), function(result) {
      handleConceptGamification("optimalSolutionGraphical");
    });
  });
});

$(document).ready(function(){
  $('.constraintRegionGraphical').on('click',function() {
    bootbox.alert($('<div></div>').load( "dialogs/constraintRegionGraphical.html" ), function(result) {
      handleConceptGamification("constraintRegionGraphical");
    });
  });
});

$(document).ready(function(){
  $('.feasibleRegionGraphical').on('click',function() {
    bootbox.alert($('<div></div>').load( "dialogs/feasibleRegionGraphical.html" ), function(result) {
      handleConceptGamification("feasibleRegionGraphical");
    });
  });
});
//END graphical concepts 