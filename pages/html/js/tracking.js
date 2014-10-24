function pageEvent(userId, pageId, eventId){
  console.log("pageEvent: "+eventId);
    $.ajax({
    async: false,
    url:'https://enigmatic-atoll-1005.herokuapp.com/',
    data:{ pageId: pageId, userId: userId, eventId: eventId }
  });
}