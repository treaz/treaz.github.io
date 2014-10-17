var normalUsers = ["test","CEaJZYqGIgOw", "dhixTHutsGph", "HpGTPASOBBBb", "ItvyFqBPUkji", "kelGzVwttiSr", "oyOwhrvaIdtm", "YYBLveewYNyq", "NGEkfGvnSPMG", "fpKRBUIdXvSd", "IHXWqdxmdMLU"];

var gamificationUsers = {};
gamificationUsers["horia"] = "1";
gamificationUsers["cutKcakcfizR"] = "10";
gamificationUsers["FVHFOwjwUbqm"] = "11";
gamificationUsers["ovewzQDfuHod"] = "12";
gamificationUsers["fXyYxCDpUwFR"] = "13";
gamificationUsers["uAYrhMIPdDDe"] = "14";
gamificationUsers["aqdorOGzboop"] = "15";
gamificationUsers["mOlrTDZcRyxT"] = "16";
gamificationUsers["uKJYfDjwGgSt"] = "17";
gamificationUsers["dEywdwCAssIS"] = "18";
gamificationUsers["zxepkXIBBgPJ"] = "19";

$(document).ready(function(){
  $(".buttonLogin").on('click',function() {
    var username = $(".inputlogin").val();
    if (username in gamificationUsers) {
      localStorage.setItem("isGamified", "true");
      localStorage.setItem("userId", gamificationUsers[username]);
      window.location.href = "whyOptimizationModeling.html";
      return false;
    } else if (normalUsers.indexOf(username) != -1) {
      localStorage.setItem("isGamified", "false");
      window.location.href = "whyOptimizationModeling.html";
      return false;
    } else {
      alert("Please enter a valid username");
    }
  });
});