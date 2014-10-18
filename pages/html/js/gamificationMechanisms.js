var CONCEPT_SEPARATOR = "|";
var USER_ID;

var allInformationPages = [/*13 or concepts*/"operationsResearch", "mathematicalModel", "mathematicalProgramming", "optimizationModeling", "solution", "linearProgramming", "objectiveFunction", "constraints", "feasibleSolution", "parameters", "decisionVariables", "optimalSolution", "nonNegConstraints",/*5 graphical concepts*/"graphicalRepresentation", "objectiveFunctionContour","optimalSolutionGraphical", "constraintRegionGraphical", "feasibleRegionGraphical", /*4 levels of difficulty on whyOR page (except easy which is displayed initially*/"mediumDifficultyChips", "hardDifficultyChips", "veryHardDifficultyChips", "veryVeryHardDifficultyChips", /*1 concept map*/"conceptMap", /*2 lp examples*/"busProblem", "chairProblem", /*4 major pages*/"whyOptimizationModeling", "introToOptimizationModeling", "modelingLPProblem", "lpProblemText"];

var answeredQuizzes = ["decisionVariables", "objectiveFunction", "constraints", "nonNegConstraints", "parameters"];

var playbasis = new Playbasis('2767998996');
var playbasisToken;

window.setInterval("showUserBar()", 100);

$(document).ready(function() {
  var isGamified = localStorage.getItem("isGamified");
  if (isGamified==="true"){
    USER_ID=localStorage.getItem("userId");
    initializeGamificationLibrary();
    //enalbe playbasis client
    //append all gamification elements to dom
    $( "body" ).append( '<div class="pb-userbar" data-pb-displayPoint="exp" ></div>' );
    $(".nav.navbar-nav").append('<li><a href="dashboard.html">Dashboard</a></li>');
  } else if (isGamified==="false"){
    //playbasis is disabled
  } else {
    window.location.href = "login.html";
    return false;
  }
});

function initializeGamificationLibrary(){
  playbasisToken = localStorage.getItem("playbasisToken");
  if (typeof playbasisToken === 'undefined' || playbasisToken ===null ){
    playbasis.auth('a45ae6e91f0f07125d60f8b92f8948c3', function (result) {
      playbasisToken=result.response.token;
      localStorage.setItem("playbasisToken", playbasisToken)
    });
  }
  
  window.PBAsyncInit = function(){
      PB.init({
        api_key:'2767998996',
        theme_color :'#0e9ce4',
        playerId :localStorage.getItem("userId")
      });
    };(!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://widget.pbapp.net/playbasis/en/all.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','playbasis-js'));
}

function showUserBar(){
  if($(".pb-menu-bar-wrapper").is(":hidden")) {
    $(".pb-menu-bar-wrapper").show();
  }
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

function isGamificationEnabled(){
  var isGamified = localStorage.getItem("isGamified");
  return isGamified==="true";
}

// Quiz handling functions
function handleQuizAnswer(conceptId){
  if (isGamificationEnabled()){
    console.log("handleQuizAnswer for id: "+conceptId);
    awardPointForFirstQuizSubmission(conceptId);
    addConceptToLocalstorageItem("answeredQuizzes", conceptId);
  }
}

function awardPointForFirstQuizSubmission(conceptId){
  var readConcepts = readArrayFromLocalstorage("answeredQuizzes");
  if ($.inArray(conceptId, readConcepts)===-1) {
    console.log("awardPointForFirstQuizSubmission: "+conceptId);
    playbasis.rule(playbasisToken, "submitcorrectanswer", USER_ID, "exp", function (result) {
      console.log(result);
    });
  }
}
//END

// Information pages handling functions
function handleConceptGamification(conceptName){
  if (isGamificationEnabled()){
    awardPointForFirstRead(conceptName);
    addConceptToLocalstorageItem("readConcepts", conceptName);
    checkallInformationPagesRead();
  }
}

function awardPointForFirstRead(conceptId){
  var readConcepts = readArrayFromLocalstorage("readConcepts");
  if ($.inArray(conceptId, readConcepts)===-1) {
    console.log("playbasisToken"+playbasisToken);
    console.log("awardPointForFirstRead");
    playbasis.rule(playbasisToken, "read", USER_ID, "exp", function (result) {
      console.log(result);
    });
  }
}

function addConceptToLocalstorageItem(localstorageItem, conceptId ){
  var readConcepts = localStorage.getItem(localstorageItem); 
  if (readConcepts===null){
    readConcepts = conceptId;
  } else {
    readConcepts += CONCEPT_SEPARATOR;
    readConcepts += conceptId;
  }
  localStorage.setItem(localstorageItem, readConcepts);
}


function checkallInformationPagesRead(){
  var readConcepts = readArrayFromLocalstorage("readConcepts");
  if (allInformationPages.length === intersectStringArrays(readConcepts, allInformationPages).length){
    alert("giving academic badge");
    //playbasis.rule(playbasisToken, "read", "1", "", function (result) {
    //  console.log(result);
    //});
  }
}

//END

function readArrayFromLocalstorage(item){
  if (localStorage.getItem(item)===null) {
    return [];
  } else {
    return localStorage.getItem(item).split(CONCEPT_SEPARATOR);
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