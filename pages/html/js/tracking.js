var USER_ID=localStorage.getItem("userId");
function pageEvent(pageId, eventId){
  console.log("pageEvent: "+eventId);
    $.ajax({
    async: false,
    url:'https://enigmatic-atoll-1005.herokuapp.com/',
    data:{ pageId: pageId, userId: USER_ID, eventId: eventId }
  });
}