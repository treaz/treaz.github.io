var pageId = "introToOptimizationModeling";

window.onload=function(){
  handleConceptGamification(pageId);
  handleStayedOnMainPageLongBadge(pageId);
  pageEvent(pageId, "openPage");
};

$(window).on('beforeunload', function () {
  pageEvent(pageId, "closePage");
});