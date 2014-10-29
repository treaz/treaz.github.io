var messageOnCorrectAnswer = "Your answer is correct.";
var messageOnIncorrectAnswer = "Your answer is incorrect. Try again...";

var pageId ="modelingLPProblem2";

//registering various events in the page
$(document).ready(function(){
  
  $('.showModelLP2').on('click',function() {
    $('.modelLP2').slideToggle();
    return false;
  });
  
  $('.notationExplanationLP2').on('click',function() {
    bootbox.alert($('<div></div>').load( "modelingLPProblem2/notationExplanationLP2.html" ), function(result) {
    });
    return false;
  });
  
  $('.objectiveFunctionLP2').on('click',function() {
    bootbox.alert($('<div></div>').load( "modelingLPProblem2/objectiveFunctionLP2.html" ), function(result) {
    });
    return false;
  });
  
  $('.decisionVariablesLP2').on('click',function() {
    bootbox.alert($('<div></div>').load( "modelingLPProblem2/decisionVariablesLP2.html" ), function(result) {
    });
    return false;
  });
  
  $('.constraintsLP2').on('click',function() {
    bootbox.alert($('<div></div>').load( "modelingLPProblem2/constraintsLP2.html" ), function(result) {
    });
    return false;
  });
  
  $('.nonNegConstraintsLP2').on('click',function() {
    bootbox.alert($('<div></div>').load( "modelingLPProblem2/nonNegConstraintsLP2.html" ), function(result) {
    });
    return false;
  });
  
  $('.parametersLP2').on('click',function() {
    bootbox.alert($('<div></div>').load( "modelingLPProblem2/parametersLP2.html" ), function(result) {
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
  saveChatMessages();
});
