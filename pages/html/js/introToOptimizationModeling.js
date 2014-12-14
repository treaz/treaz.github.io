var pageId = "introToOptimizationModeling";

window.onload=function(){
  handleConceptGamification(pageId);
  handleStayedOnMainPageLongBadge(pageId);
  pageEvent(pageId, "openPage");
};

$(document).ready(function(){
  $('.chairProblem').on('click',function() {
    bootbox.alert($('<div></div>').load( "modelingLPProblem/chairProblem.html" ), function(result) {
    });
    pageEvent("chairProblem", "openPage");
    handleConceptGamification("chairProblem");
  });
  
  $('.busProblem').on('click',function() {
    bootbox.alert($('<div></div>').load( "modelingLPProblem/busProblem.html" ), function(result) {
    });
    pageEvent("busProblem", "openPage");
    handleConceptGamification("busProblem");
  });
});

$(window).on('beforeunload', function () {
  pageEvent(pageId, "closePage");
  saveChatMessages();
});