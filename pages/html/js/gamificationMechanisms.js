$.getScript('js/underscore-min.js', function(){});

var CONCEPT_SEPARATOR = "|";
var USER_ID;

var allInformationPages = [/*13 or concepts*/"operationsResearch", "mathematicalModel", "mathematicalProgramming", "optimizationModeling", "solution", "linearProgramming", "objectiveFunction", "constraints", "feasibleSolution", "parameters", "decisionVariables", "optimalSolution", "nonNegConstraints",/*5 graphical concepts*/"graphicalRepresentation", "objectiveFunctionContour","optimalSolutionGraphical", "constraintRegionGraphical", "feasibleRegionGraphical", /*4 levels of difficulty on whyOR page (except easy which is displayed initially*/"mediumDifficultyChips", "hardDifficultyChips", "veryHardDifficultyChips", "veryVeryHardDifficultyChips", /*1 concept map*/"conceptMap", /*2 lp examples*/"busProblem", "chairProblem", /*3 major pages*/"whyOptimizationModeling", "introToOptimizationModeling", "modelingLPProblem"];

var allQuizzesToAnswer = ["decisionVariables", "objectiveFunction", "constraints", "nonNegConstraints", "parameters"];

var allChipsProblemVersion = ["easyDifficultyChips", "mediumDifficultyChips", "hardDifficultyChips", "veryHardDifficultyChips"]

var allVideosToPlay = ["gamificationDashboardPlayer", "generalGamificationPlayer"]

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
    $(".nav.navbar-nav").append('<li><a href="gamificationTutorial.html">Using the tutorial</a></li>');
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
function handleAnyQuizAnswer(conceptId){
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
    playbasis.rule(playbasisToken, "submitcorrectanswer", USER_ID, "any", function (result) {
      console.log(result);
    });
  }
}

function awardPointForFirstCorrectQuizSubmission(conceptId){
  var readConcepts = readArrayFromLocalstorage("answeredCorrectlyQuizzes");
  if ($.inArray(conceptId, readConcepts)===-1) {
    console.log("awardPointForFirstCorrectQuizSubmission: "+conceptId);
    playbasis.rule(playbasisToken, "submitcorrectanswer", USER_ID, "correct", function (result) {
      console.log(result);
    });
  }
}

function handleCorrectQuizAnswer(conceptId){
  if (isGamificationEnabled()){
    console.log("handleQuizAnswer for id: "+conceptId);
    awardPointForFirstCorrectQuizSubmission(conceptId);
    addConceptToLocalstorageItem("answeredCorrectlyQuizzes", conceptId);
    checkAllQuizzesCorrectlyAnswered();
  }
}

function checkAllQuizzesCorrectlyAnswered(){
  var answeredCorrectlyQuizzes = readArrayFromLocalstorage("answeredCorrectlyQuizzes");
  var intersectionLength = _.intersection(answeredCorrectlyQuizzes, allQuizzesToAnswer).length;
  console.log("intersectionLength: "+intersectionLength)
  if (allQuizzesToAnswer.length === intersectionLength){
    bootbox.alert("You have earned the 'Quiz whiz' badge");
    //playbasis.rule(playbasisToken, "read", "1", "", function (result) {
    //  console.log(result);
    //});
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
  var intersectionLength = _.intersection(readConcepts, allInformationPages).length;
  console.log("checkallInformationPagesRead intersectionLength: "+intersectionLength)
  if (allInformationPages.length === intersectionLength){
    bootbox.alert("You have earned the 'Academic' badge");
    //playbasis.rule(playbasisToken, "read", "1", "", function (result) {
    //  console.log(result);
    //});
  }
}
//END


//logic for the version of the chips problem
function handleChipsProblemCorrectSubmission(chipsDifficultyId){
  if (isGamificationEnabled()){
    addConceptToLocalstorageItem("submittedChipsProblemVersion", chipsDifficultyId);
    checkAllChipsProblemDifficultiesCompleted();
  }
}

function checkAllChipsProblemDifficultiesCompleted(){
  var submittedChipsProblemVersion = readArrayFromLocalstorage("submittedChipsProblemVersion");
  var intersectionLength = _.intersection(allChipsProblemVersion, submittedChipsProblemVersion).length;
  console.log("checkAllChipsProblemDifficultiesCompleted intersectionLength: "+intersectionLength)
  if (allChipsProblemVersion.length === intersectionLength){
    bootbox.alert("You have earned the 'Math lover' badge");
    //playbasis.rule(playbasisToken, "read", "1", "", function (result) {
    //  console.log(result);
    //});
  }
}
//END

// gamification tutorial handling functions
function handleVideoPlayed(videoId){
  if (isGamificationEnabled()){
    addConceptToLocalstorageItem("watchedVideos", videoId);
    checkAllVideosPlayed();
  }
}

function checkAllVideosPlayed(){
  var watchedVideos = readArrayFromLocalstorage("watchedVideos");
  var intersectionLength = _.intersection(allVideosToPlay, watchedVideos).length;
  console.log("checkAllVideosPlayed intersectionLength: "+intersectionLength)
  if (allVideosToPlay.length === intersectionLength){
    bootbox.alert("You have earned the 'Feature explorer' badge");
    //playbasis.rule(playbasisToken, "read", "1", "", function (result) {
    //  console.log(result);
    //});
  }
}
// END

function readArrayFromLocalstorage(item){
  if (localStorage.getItem(item)===null) {
    return [];
  } else {
    return localStorage.getItem(item).split(CONCEPT_SEPARATOR);
  }
}