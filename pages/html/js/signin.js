var normalUsers = {}
normalUsers["test"]="120";
normalUsers["IHXWqdxmdMLU"]="100";
normalUsers["fpKRBUIdXvSd"]="101";
normalUsers["CEaJZYqGIgOw"]="102";
normalUsers["dhixTHutsGph"]="103";
normalUsers["HpGTPASOBBBb"]="104";
normalUsers["ItvyFqBPUkji"]="105";
normalUsers["kelGzVwttiSr"]="106";
normalUsers["oyOwhrvaIdtm"]="107";
normalUsers["YYBLveewYNyq"]="108";
normalUsers["NGEkfGvnSPMG"]="109";


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