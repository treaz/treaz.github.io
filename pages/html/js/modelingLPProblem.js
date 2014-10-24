var messageOnCorrectAnswer = "Your answer is correct.";
var messageOnIncorrectAnswer = "Your answer is incorrect. Try again...";

var pageId = "modelingLPProblem";

//registering various events in the page
$(document).ready(function(){
  $('.chairProblem').on('click',function() {
    bootbox.alert($('<div></div>').load( "modelingLPProblem/chairProblem.html" ), function(result) {
    });
  handleConceptGamification("chairProblem");
  });
  
  $('.busProblem').on('click',function() {
    bootbox.alert($('<div></div>').load( "modelingLPProblem/busProblem.html" ), function(result) {
    });
  handleConceptGamification("busProblem");
  });
  
  $('.showChipsModel').on('click',function() {
    $('.chipsModel').slideToggle();
  });
  
  $('.notationExplanation').on('click',function() {
    bootbox.alert($('<div></div>').load( "modelingLPProblem/notationExplanation.html" ), function(result) {
    });
  });
  
  $('.conceptMap').on('click',function() {
    bootbox.alert($('<div></div>').load( "dialogs/conceptMap.html" ), function(result) {
    }).find("div.modal-dialog").addClass("conceptMapWidth");
    handleConceptGamification('conceptMap');
  });
});

window.onload=function() {
  handleConceptGamification(pageId);
  handleStayedOnMainPageLongBadge(pageId);
  pageEvent(USER_ID, pageId, "openPage");
};

$(window).on('beforeunload', function () {
  pageEvent(USER_ID, pageId, "closePage");
});

