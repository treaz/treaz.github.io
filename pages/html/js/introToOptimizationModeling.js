var pageId = "introToOptimizationModeling";

window.onload=function(){
  handleConceptGamification(pageId);
  handleStayedOnMainPageLongBadge(pageId);
  pageEvent(USER_ID, pageId, "openPage");
};

$(window).on('beforeunload', function () {
  pageEvent(USER_ID, pageId, "closePage");
});