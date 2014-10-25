$(document).ready(function(){
  $(".buttonLogin").on('click',function() {
    var username = $(".inputlogin").val();
    if (username in gamificationUsers) {
      localStorage.setItem("isGamified", "true");
      localStorage.setItem("userId", gamificationUsers[username]);
      window.location.href = "gamificationTutorial.html";
      return false;
    } else if (username in normalUsers) {
      localStorage.setItem("isGamified", "false");
      localStorage.setItem("userId", normalUsers[username]);
      window.location.href = "whyOptimizationModeling.html";
      return false;
    } else {
      alert("Please enter a valid username");
    }
  });
});

var pageId="login";
window.onload=function() {
  pageEvent(pageId, "openPage");
};