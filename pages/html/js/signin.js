var users = {};
users["horia"] = "1";
users["cutKcakcfizR"] = "10";
users["FVHFOwjwUbqm"] = "11";
users["ovewzQDfuHod"] = "12";
users["fXyYxCDpUwFR"] = "13";
users["uAYrhMIPdDDe"] = "14";
users["aqdorOGzboop"] = "15";
users["mOlrTDZcRyxT"] = "16";
users["uKJYfDjwGgSt"] = "17";
users["dEywdwCAssIS"] = "18";
users["zxepkXIBBgPJ"] = "19";

$(document).ready(function(){
  $(":button").on('click',function() {
    var username = $(":input").val();
    if (username in users) {
      var userId = localStorage.getItem("userId"); 
      localStorage.setItem("userId", users[username]);
      window.location.href = "whyOptimizationModeling.html";
      return false;
    } else {
      alert("Please enter a valid username");
    }
  });
});