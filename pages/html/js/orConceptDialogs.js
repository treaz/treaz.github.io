var allConcepts = ["operationsResearch", "mathematicalModel", "mathematicalProgramming", "optimizationModeling", "solution", "linearProgramming", "objectiveFunction", "constraints", "feasibleSolution", "parameters", "decisionVariables", "optimalSolution",/*4 graphical concepts*/"objectiveFunctionContour","optimalSolutionGraphical", "constraintRegionGraphical", "feasibleRegionGraphical"];
var CONCEPT_SEPARATOR = "|";

//concept map concepts
$(document).ready(function(){
  $('.optimizationModeling').on('click',function() {
    bootbox.alert($('<div></div>').load( "dialogs/optimizationModeling.html" ), function(result) {
      handleConceptGamification("optimizationModeling");
    });
  });
});

$(document).ready(function(){
  $('.operationsResearch').on('click',function() {
    bootbox.alert($('<div></div>').load( "dialogs/operationsResearch.html" ), function(result) {
      handleConceptGamification("operationsResearch");
    });
  });
});

$(document).ready(function(){
  $('.mathematicalProgramming').on('click',function() {
    bootbox.alert($('<div></div>').load( "dialogs/mathematicalProgramming.html" ), function(result) {
      handleConceptGamification("mathematicalProgramming");
    });
  });
});

$(document).ready(function(){
  $('.linearProgramming').on('click',function() {
    bootbox.alert($('<div></div>').load( "dialogs/linearProgramming.html" ), function(result) {
      handleConceptGamification("linearProgramming");
    });
  });
});

$(document).ready(function(){
  $('.mathematicalModel').on('click',function() {
    bootbox.alert($('<div></div>').load( "dialogs/mathematicalModel.html" ), function(result) {
      handleConceptGamification("mathematicalModel");
    });
  });
});

$(document).ready(function(){
  $('.objectiveFunction').on('click',function() {
    bootbox.alert($('<div></div>').load( "dialogs/objectiveFunction.html" ), function(result) {
      handleConceptGamification("objectiveFunction");
    });
  });
});

$(document).ready(function(){
  $('.constraints').on('click',function() {
    bootbox.alert($('<div></div>').load( "dialogs/constraints.html" ), function(result) {
      handleConceptGamification("constraints");
    });
  });
});

$(document).ready(function(){
  $('.solution').on('click',function() {
    bootbox.alert($('<div></div>').load( "dialogs/solution.html" ), function(result) {
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


function handleConceptGamification(conceptName){
  awardPointForFirstRead(conceptName);
      addConceptToReadConcepts(conceptName);
      checkAllConceptsRead();
}

function awardPointForFirstRead(conceptId){
  var readConcepts = getReadConceptsArray();
  if ($.inArray(conceptId, readConcepts)===-1) {
    alert("first time reading the concept. giving 10 points");
  }
}

function addConceptToReadConcepts(conceptId){
  var readConcepts = localStorage.getItem("readConcepts"); 
  if (readConcepts===null){
    readConcepts = conceptId;
  } else {
    readConcepts += CONCEPT_SEPARATOR;
    readConcepts += conceptId;
  }
  localStorage.setItem("readConcepts", readConcepts);
}

function getReadConceptsArray(){
  if (localStorage.getItem("readConcepts")===null) {
    return [];
  } else {
    return localStorage.getItem("readConcepts").split(CONCEPT_SEPARATOR);
  }
}

function checkAllConceptsRead(){
  var readConcepts = getReadConceptsArray();
  if (allConcepts.length === intersectStringArrays(readConcepts, allConcepts).length){
    alert("giving academic badge");
    //playbasis.rule(playbasisToken, "read", "1", "", function (result) {
    //  console.log(result);
    //});
  }
}

function intersectStringArrays(array1, array2) {
   var result = [];
   // Don't destroy the original arrays
   var a = array1.slice(0);
   var b = array2.slice(0);
   var aLast = a.length - 1;
   var bLast = b.length - 1;
   while (aLast >= 0 && bLast >= 0) {
      if (a[aLast].localeCompare(b[bLast]) > 0 ) {
         a.pop();
         aLast--;
      } else if (a[aLast].localeCompare(b[bLast]) < 0 ){
         b.pop();
         bLast--;
      } else /* they're equal */ {
         result.push(a.pop());
         b.pop();
         aLast--;
         bLast--;
      }
   }
   return result;
}