var pageId="login";

$(document).ready(function(){
  $(".buttonLogin").on('click',function() {
    var username = $(".inputlogin").val();
    var password = $(".inputPassword").val();
    if (username in gamificationUsers && password===gamificationUsers[username]) {
      localStorage.setItem("isGamified", "true");
      localStorage.setItem("userId", username);
      pageEvent(pageId, "openPage");
      window.location.href = "gamificationTutorial.html";
      return false;
    } else if (username in normalUsers && password===normalUsers[username]) {
      localStorage.setItem("isGamified", "false");
      localStorage.setItem("userId", username);
      pageEvent(pageId, "openPage");
      window.location.href = "whyOptimizationModeling.html";
      return false;
    } else {
      alert("Please enter a valid username and password");
    }
  });
});


window.onload=function() {
  pageEvent(pageId, "openPage");
};