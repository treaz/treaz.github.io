var allConcepts = ["operationsResearch", "optimizationModeling"];
var CONCEPT_SEPARATOR = "|";

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