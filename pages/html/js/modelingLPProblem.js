var messageOnCorrectAnswer = "Your answer is correct.";
var messageOnIncorrectAnswer = "Your answer is incorrect. Try again...";

var pageId ="modelingLPProblem";

//registering various events in the page
$(document).ready(function(){
  
  $('.showChipsModel').on('click',function() {
    $('.chipsModel').slideToggle();
    return false;
  });
  
  $('.notationExplanation').on('click',function() {
    bootbox.alert($('<div></div>').load( "modelingLPProblem/notationExplanationLP1.html" ), function(result) {
    });
    return false;
  });
  
  $('.objectiveFunctionLP1').on('click',function() {
    bootbox.alert($('<div></div>').load( "modelingLPProblem/objectiveFunctionLP1.html" ), function(result) {
    });
    return false;
  });
  
  $('.decisionVariablesLP1').on('click',function() {
    bootbox.alert($('<div></div>').load( "modelingLPProblem/decisionVariablesLP1.html" ), function(result) {
    });
    return false;
  });
  
  $('.constraintsLP1').on('click',function() {
    bootbox.alert($('<div></div>').load( "modelingLPProblem/constraintsLP1.html" ), function(result) {
    });
    return false;
  });
  
  $('.nonNegConstraintsLP1').on('click',function() {
    bootbox.alert($('<div></div>').load( "modelingLPProblem/nonNegConstraintsLP1.html" ), function(result) {
    });
    return false;
  });
  
  $('.parametersLP1').on('click',function() {
    bootbox.alert($('<div></div>').load( "modelingLPProblem/parametersLP1.html" ), function(result) {
    });
    return false;
  });
});

window.onload=function() {
  handleConceptGamification(pageId);
  handleStayedOnMainPageLongBadge(pageId);
  pageEvent(pageId, "openPage");
};

$(window).on('beforeunload', function () {
  pageEvent(pageId, "closePage");
});
