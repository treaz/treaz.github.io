var USER_ID=localStorage.getItem("userId");
function pageEvent(pageId, eventId){
  console.log("pageEvent: "+eventId);
    $.ajax({
    async: false,
    url:'https://enigmatic-atoll-1005.herokuapp.com/servlet/',
    data:{ pageId: pageId, userId: USER_ID, eventId: eventId }
  });
}

function pageEvent3(userId, pageId, eventId){
  console.log("pageEvent: "+eventId);
    $.ajax({
    async: false,
    url:'https://enigmatic-atoll-1005.herokuapp.com/servlet/',
    data:{ pageId: pageId, userId: userId, eventId: eventId }
  });
}