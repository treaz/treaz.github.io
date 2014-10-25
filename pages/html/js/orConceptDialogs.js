var orConceptEventId = "openPage";

//13 OR concept concepts (12 in concept map + non negativvity constraints
$(document).ready(function(){
  $('.optimizationModeling').on('click',function() {
    bootbox.alert($('<div></div>').load( "dialogs/optimizationModeling.html" ), function(result) {
      pageEvent("optimizationModeling", orConceptEventId);
      handleConceptGamification("optimizationModeling");
    });
  });
  
  $('.operationsResearch').on('click',function() {
    bootbox.alert($('<div></div>').load( "dialogs/operationsResearch.html" ), function(result) {
      pageEvent("operationsResearch", orConceptEventId);
      handleConceptGamification("operationsResearch");
    });
  });
  
  $('.mathematicalProgramming').on('click',function() {
    bootbox.alert($('<div></div>').load( "dialogs/mathematicalProgramming.html" ), function(result) {
      pageEvent("mathematicalProgramming", orConceptEventId);
      handleConceptGamification("mathematicalProgramming");
    });
  });
  
  $('.linearProgramming').on('click',function() {
    bootbox.alert($('<div></div>').load( "dialogs/linearProgramming.html" ), function(result) {
      pageEvent("linearProgramming", orConceptEventId);
      handleConceptGamification("linearProgramming");
    });
  });
  
  $('.mathematicalModel').on('click',function() {
    bootbox.alert($('<div></div>').load( "dialogs/mathematicalModel.html" ), function(result) {
      pageEvent("mathematicalModel", orConceptEventId);
      handleConceptGamification("mathematicalModel");
    });
  });
  
  $('.objectiveFunction').on('click',function() {
    bootbox.alert($('<div></div>').load( "dialogs/objectiveFunction.html" ), function(result) {
      pageEvent("objectiveFunction", orConceptEventId);
      handleConceptGamification("objectiveFunction");
    });
  });
  
  $('.constraints').on('click',function() {
    bootbox.alert($('<div></div>').load( "dialogs/constraints.html" ), function(result) {
      pageEvent("constraints", orConceptEventId);
      handleConceptGamification("constraints");
    });
  });
  
  $('.solution').on('click',function() {
    bootbox.alert($('<div></div>').load( "dialogs/optimalSolution.html" ), function(result) {
      pageEvent("solution", orConceptEventId);
      handleConceptGamification("solution");
    });
  }); 
});

$(document).ready(function(){
  $('.optimalSolution').on('click',function() {
    bootbox.alert($('<div></div>').load( "dialogs/optimalSolution.html" ), function(result) {
      pageEvent("optimalSolution", orConceptEventId);
      handleConceptGamification("optimalSolution");
    });
  });
});

$(document).ready(function(){
  $('.feasibleSolution').on('click',function() {
    bootbox.alert($('<div></div>').load( "dialogs/optimalSolution.html" ), function(result) {
      pageEvent("feasibleSolution", orConceptEventId);
      handleConceptGamification("feasibleSolution");
    });
  });
});

$(document).ready(function(){
  $('.parameters').on('click',function() {
    bootbox.alert($('<div></div>').load( "dialogs/parameters.html" ), function(result) {
      pageEvent("parameters", orConceptEventId);
      handleConceptGamification("parameters");
    });
  });
});

$(document).ready(function(){
  $('.decisionVariables').on('click',function() {
    bootbox.alert($('<div></div>').load( "dialogs/decisionVariables.html" ), function(result) {
      pageEvent("decisionVariables", orConceptEventId);
      handleConceptGamification("decisionVariables");
    });
  });
});

$(document).ready(function(){
  $('.nonNegConstraints').on('click',function() {
    bootbox.alert($('<div></div>').load( "dialogs/nonNegConstraints.html" ), function(result) {
      pageEvent("nonNegConstraints", orConceptEventId);
      handleConceptGamification("nonNegConstraints");
    });
  });
});

//graphical concepts
$(document).ready(function(){
  $('.objectiveFunctionContour').on('click',function() {
    bootbox.alert($('<div></div>').load( "dialogs/objectiveFunctionContour.html" ), function(result) {
      pageEvent("objectiveFunctionContour", orConceptEventId);
      handleConceptGamification("objectiveFunctionContour");
    });
  });
});

$(document).ready(function(){
  $('.optimalSolutionGraphical').on('click',function() {
    bootbox.alert($('<div></div>').load( "dialogs/optimalSolutionGraphical.html" ), function(result) {
      pageEvent("optimalSolutionGraphical", orConceptEventId);
      handleConceptGamification("optimalSolutionGraphical");
    });
  });
});

$(document).ready(function(){
  $('.constraintRegionGraphical').on('click',function() {
    bootbox.alert($('<div></div>').load( "dialogs/constraintRegionGraphical.html" ), function(result) {
      pageEvent("constraintRegionGraphical", orConceptEventId);
      handleConceptGamification("constraintRegionGraphical");
    });
  });
});

$(document).ready(function(){
  $('.feasibleRegionGraphical').on('click',function() {
    bootbox.alert($('<div></div>').load( "dialogs/feasibleRegionGraphical.html" ), function(result) {
      pageEvent("feasibleRegionGraphical", orConceptEventId);
      handleConceptGamification("feasibleRegionGraphical");
    });
  });
});
//END graphical concepts 