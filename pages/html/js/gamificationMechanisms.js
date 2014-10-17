var allInformationPages = [/*13 or concepts*/"operationsResearch", "mathematicalModel", "mathematicalProgramming", "optimizationModeling", "solution", "linearProgramming", "objectiveFunction", "constraints", "feasibleSolution", "parameters", "decisionVariables", "optimalSolution", "nonNegConstraints",/*4 graphical concepts*/"objectiveFunctionContour","optimalSolutionGraphical", "constraintRegionGraphical", "feasibleRegionGraphical"];
var CONCEPT_SEPARATOR = "|";

function handleConceptGamification(conceptName){
  awardPointForFirstRead(conceptName);
      addConceptToReadConcepts(conceptName);
      checkallInformationPagesRead();
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

function checkallInformationPagesRead(){
  var readConcepts = getReadConceptsArray();
  if (allInformationPages.length === intersectStringArrays(readConcepts, allInformationPages).length){
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