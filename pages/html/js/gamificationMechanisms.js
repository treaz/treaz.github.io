var CONCEPT_SEPARATOR = "|";
var USER_ID;

var allInformationPages = [/*13 or concepts*/"operationsResearch", "mathematicalModel", "mathematicalProgramming", "optimizationModeling", "solution", "linearProgramming", "objectiveFunction", "constraints", "feasibleSolution", "parameters", "decisionVariables", "optimalSolution", "nonNegConstraints", /*4 levels of difficulty on whyOR page (except easy which is displayed initially*/"mediumDifficultyChips", "hardDifficultyChips", "veryHardDifficultyChips", "veryVeryHardDifficultyChips", /*1 concept map*/"conceptMap", /*2 lp examples*/"busProblem", "chairProblem", /*4 major pages*/"whyOptimizationModeling", "introToOptimizationModeling", "modelingLPProblem", "modelingLPProblem2"];

var allQuizzesToAnswer = ["decisionVariablesLP1", "objectiveFunctionLP1", "constraintsLP1", "nonNegConstraintsLP1", "parametersLP1", "decisionVariablesLP2", "objectiveFunctionLP2", "constraintsLP2", "nonNegConstraintsLP2", "parametersLP2"];

var allChipsProblemVersion = ["easyDifficultyChips", "mediumDifficultyChips", "hardDifficultyChips", "veryHardDifficultyChips"]

var allTutorialEvents = ["tutorialClickDashboard", "tutorialOpenUserbar", "tutorialHelloAll"]
var allVideosToPlay = ["gamificationDashboardPlayer", "generalGamificationPlayer"]

var playbasis = new Playbasis('2767998996');
var playbasisToken;

var attemptAnswer = "attemptAnswer";
var correctAnswer = "correctAnswer";
var showedAnswer = "showedAnswer";

$(document).ready(function() {
  var isGamified = localStorage.getItem("isGamified");
  if (isGamified==="true"){
    USER_ID=localStorage.getItem("userId");
    initializeGamificationLibrary();
    //enalbe playbasis client
    //append all gamification elements to dom
    $("body").append( '<div class="pb-userbar" data-pb-displayPoint="exp" ></div>' );
    $(".chatPlaceholder").append( '<div class="col-xs-12">'+
          '<div id="chat"></div>'+
          '<div id="input">'+
            '<div id="joined">'+
              'Chat:&nbsp;'+
              '<input id="phrase" type="text" /> '+
              '<input id="sendB" class="btn btn-primary " type="submit" name="join" value="Send" />'+
              '<input id="otherUserId" type="text" style="float:right"/> '+
              '<input id="rateUserAsHelpful" class="btn btn-primary" style="float:right" type="submit" value="Rate user as helpful" />'+
            '</div>'+
          '</div>'+
        '</div>' );
    $(".nav.navbar-nav").append('<li><a href="dashboard.html">Dashboard</a></li>');
    $(".nav.navbar-nav").prepend('<li><a href="gamificationTutorial.html">Using the tutorial</a></li>');
  } else if (isGamified==="false"){
    //playbasis is disabled
  } else {
    window.location.href = "login.html";
    return false;
  }
  
  $('#rateUserAsHelpful').on('click',function() {
    if ($("#otherUserId").val()===USER_ID){
      bootbox.alert("You cannot rate yourself as helpful.");
    } else {
      playbasis.rule(playbasisToken, "like", $("#otherUserId").val(), "", "", "", function (response) {
        console.log(response);
      });
    }
    $("#otherUserId").val('');
    return false;
  });
  
});

function initializeGamificationLibrary(){
  playbasisToken = localStorage.getItem("playbasisToken");
  if (typeof playbasisToken === 'undefined' || playbasisToken ===null ){
    playbasis.auth('a45ae6e91f0f07125d60f8b92f8948c3', function (result) {
      playbasisToken=result.response.token;
      localStorage.setItem("playbasisToken", playbasisToken)
    });
  }
  
  window.PBAsyncInit = function(){
      PB.init({
        api_key:'2767998996',
        theme_color :'#0e9ce4',
        playerId :localStorage.getItem("userId")
      });
    };(!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://widget.pbapp.net/playbasis/en/all.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','playbasis-js'));
}

function isGamificationEnabled(){
  var isGamified = localStorage.getItem("isGamified");
  return isGamified==="true";
}

// Quiz handling functions
function handleAnyQuizAnswer(conceptId){
  pageEvent(conceptId, attemptAnswer);
  if (isGamificationEnabled()){
    console.log("handleQuizAnswer for id: "+conceptId);
    awardPointForFirstQuizSubmission(conceptId);
    addConceptToLocalstorageItem("answeredQuizzes", conceptId);
  }
}

function awardPointForFirstQuizSubmission(conceptId){
  var readConcepts = readArrayFromLocalstorage("answeredQuizzes");
  if ($.inArray(conceptId, readConcepts)===-1) {
    console.log("awardPointForFirstQuizSubmission: "+conceptId);
    playbasis.rule(playbasisToken, "submitcorrectanswer", USER_ID, "any", "", "", function (response) {
      console.log(response);
      checkLevelReached();
    });
  }
}

function awardPointForFirstCorrectQuizSubmission(conceptId){
  var readConcepts = readArrayFromLocalstorage("answeredCorrectlyQuizzes");
  if ($.inArray(conceptId, readConcepts)===-1) {
    console.log("awardPointForFirstCorrectQuizSubmission: "+conceptId);
    playbasis.rule(playbasisToken, "submitcorrectanswer", USER_ID, "correct", "", "", function (response) {
      console.log(response);
      checkLevelReached(response);
    });
  }
}

//'Champion' badge
function checkLevelReached(response){
  if (typeof response !== 'undefined' && typeof response.response !== 'undefined' && typeof response.response.events !== 'undefined' && response.response.events.length > 0) {
    var leveUpEventArray = response.response.events.filter(function (el) {
      return el.event_type === 'LEVEL_UP';
    });
    if (leveUpEventArray.length >0){
      var currentLevel = leveUpEventArray[0].value;
      console.log('currentLevel: ' + currentLevel)
      bootbox.alert("Awesome, you're now level " + currentLevel);
      if (currentLevel===5){
        playbasis.rule(playbasisToken, "levelup", USER_ID, "", "", "", function (response) {
          badgeAwardNotification(response, "You have earned the 'Champion' badge");
        });
      }
    }
  }  
}

function handleCorrectQuizAnswer(conceptId){
  pageEvent(conceptId, correctAnswer);
  if (isGamificationEnabled()){
    console.log("handleQuizAnswer for id: "+conceptId);
    awardPointForFirstCorrectQuizSubmission(conceptId);
    addConceptToLocalstorageItem("answeredCorrectlyQuizzes", conceptId);
    checkAllQuizzesCorrectlyAnswered();
  }
}

function checkAllQuizzesCorrectlyAnswered(){
  var answeredCorrectlyQuizzes = readArrayFromLocalstorage("answeredCorrectlyQuizzes");
  var intersectionLength = _.intersection(answeredCorrectlyQuizzes, allQuizzesToAnswer).length;
  console.log("intersectionLength: "+intersectionLength)
  if (allQuizzesToAnswer.length === intersectionLength){
    playbasis.rule(playbasisToken, "submitcorrectanswer", USER_ID, "quiz", "", "", function (response) {
      badgeAwardNotification(response, "You have earned the 'Quiz whiz' badge");
    });
  }
  
}
//END

// Information pages handling functions
function handleConceptGamification(conceptName){
  if (isGamificationEnabled()){
    awardPointForFirstRead(conceptName);
    addConceptToLocalstorageItem("readConcepts", conceptName);
    checkallInformationPagesRead();
  }
}

function awardPointForFirstRead(conceptId){
  var readConcepts = readArrayFromLocalstorage("readConcepts");
  if ($.inArray(conceptId, readConcepts)===-1) {
    console.log("playbasisToken"+playbasisToken);
    console.log("awardPointForFirstRead");
    playbasis.rule(playbasisToken, "read", USER_ID, "exp", "", "", function (response) {
      console.log(response);
      checkLevelReached(response);
    });
  }
}

function addConceptToLocalstorageItem(localstorageItem, conceptId ){
  var readConcepts = localStorage.getItem(localstorageItem); 
  if (readConcepts===null){
    readConcepts = conceptId;
  } else {
    readConcepts += CONCEPT_SEPARATOR;
    readConcepts += conceptId;
  }
  localStorage.setItem(localstorageItem, readConcepts);
}
//END

//'Academic' badge
function checkallInformationPagesRead(){
  var readConcepts = readArrayFromLocalstorage("readConcepts");
  var intersectionLength = _.intersection(readConcepts, allInformationPages).length;
  console.log("checkallInformationPagesRead intersectionLength: "+intersectionLength)
  if (allInformationPages.length === intersectionLength){
    playbasis.rule(playbasisToken, "read", USER_ID, "readAllConcepts", "", "", function (response) {
      badgeAwardNotification(response, "You have earned the 'Academic' badge");
    });
  }
}

//'Math lover' badge
function handleChipsProblemCorrectSubmission(chipsDifficultyId){
  if (isGamificationEnabled()){
    addConceptToLocalstorageItem("submittedChipsProblemVersion", chipsDifficultyId);
    checkAllChipsProblemDifficultiesCompleted();
  }
}

function badgeAwardNotification(response, message){
  console.log(response);
  if (response.response.events.length > 0){
    bootbox.alert(message);
  }
}

function checkAllChipsProblemDifficultiesCompleted(){
  var submittedChipsProblemVersion = readArrayFromLocalstorage("submittedChipsProblemVersion");
  var intersectionLength = _.intersection(allChipsProblemVersion, submittedChipsProblemVersion).length;
  console.log("checkAllChipsProblemDifficultiesCompleted intersectionLength: "+intersectionLength)
  if (allChipsProblemVersion.length === intersectionLength){
    playbasis.rule(playbasisToken, "submitcorrectanswer", USER_ID, "introProblem", "", "", function (response) {
      badgeAwardNotification(response, "You have earned the 'Math lover' badge");
    });
  }
}
//END

////////////////// BADGES ///////////////////////

//'Feature explorer' badge
function handleGamificationTutorialEvent(tutorialEvent){
  if (isGamificationEnabled()){
    addConceptToLocalstorageItem("tutorialEvents", tutorialEvent);
    var tutorialEvents = readArrayFromLocalstorage("tutorialEvents");
    var intersectionLength = _.intersection(allTutorialEvents, tutorialEvents).length;
    console.log("handleGamificationTutorialEvent intersectionLength: "+intersectionLength)
    if (allTutorialEvents.length === intersectionLength){
      playbasis.rule(playbasisToken, "watchedvideo", USER_ID, "", "", "", function (response) {
        badgeAwardNotification(response, "You have earned the 'Feature explorer' badge");
      });
    }
  }
}

//badges awarded for hanging out on a page long enough
function handleStayedOnMainPageLongBadge(mainPageId){
  if (isGamificationEnabled()){
    awardBadgeOnFirstMainPageView(mainPageId);
  }
}

//'Supporter' badge, 'Enlightened' badge, 'Student' badge
function awardBadgeOnFirstMainPageView(mainPageId){
  var viewedMainPages = readArrayFromLocalstorage("viewedMainPages");
  if ($.inArray(mainPageId, viewedMainPages)===-1){
    addConceptToLocalstorageItem("viewedMainPages", mainPageId);
    if (mainPageId==="whyOptimizationModeling") {
      console.log("awardBadgeOnFirstMainPageView: "+mainPageId);
      var delay=3 * 60 * 1000;//3 mins
      setTimeout(function(){
        playbasis.rule(playbasisToken, "read", USER_ID, "ORValue", "", "", function (response) {
          badgeAwardNotification(response, "You have earned the 'Supporter' badge");
        });
      },delay);
    } else if (mainPageId==="modelingLPProblem") {
      console.log("awardBadgeOnFirstMainPageView: "+mainPageId);
      var delay=3 * 60 * 1000;
      setTimeout(function(){
        playbasis.rule(playbasisToken, "read", USER_ID, "ModelingIntro", "", "", function (response) {
          badgeAwardNotification(response, "You have earned the 'Enlightened' badge");
        });
      },delay);
    } else if (mainPageId==="introToOptimizationModeling") {
      console.log("awardBadgeOnFirstMainPageView: "+mainPageId);
      var delay=4 * 60 * 1000;//2 mins
        setTimeout(function(){
          playbasis.rule(playbasisToken, "read", USER_ID, "ORIntro", "", "", function (response) {
            badgeAwardNotification(response, "You have earned the 'Student' badge");
          });
        },delay);
    } else if (mainPageId==="modelingLPProblem2") {
      console.log("awardBadgeOnFirstMainPageView: "+mainPageId);
      var delay=3 * 60 * 1000;//2 mins
        setTimeout(function(){
          playbasis.rule(playbasisToken, "read", USER_ID, "modelingLPProblem2", "", "", function (response) {
            badgeAwardNotification(response, "You have earned the 'Rising Star' badge");
          });
        },delay);
    }
  }
}
// END

//chat room
if (!window.WebSocket) {
  alert("WebSocket not supported by this browser");
}
 
var room = {
  join : function(name) {
      this._username = name;
      //var location = document.location.toString().replace('http://',
      //      'ws://').replace('https://', 'wss://');
      var location = "wss://enigmatic-atoll-1005.herokuapp.com/"
      this._ws = new WebSocket(location);
      this._ws.onopen = this._onopen;
      this._ws.onmessage = this._onmessage;
      this._ws.onclose = this._onclose;
      this._ws.onerror = this._onerror;
  },

  chat : function(text) {
      if (text != null && text.length > 0)
          room._send(room._username, text);
  },

  _onopen : function() {         
      $('#join').addClass( 'hidden' );
      $('#joined').removeClass();
  },

  _onmessage : function(m) {
      if (m.data) {
          var c = m.data.indexOf(':');
          var from = m.data.substring(0, c).replace('<', '&lt;').replace(
                  '>', '&gt;');
          var text = m.data.substring(c + 1).replace('<', '&lt;')
                  .replace('>', '&gt;');

          var chat = $('#chat');
          var spanFrom = document.createElement('span');
          spanFrom.className = 'from';
          spanFrom.innerHTML = from + ':&nbsp;';
          var spanText = document.createElement('span');
          spanText.className = 'text';
          spanText.innerHTML = text;
          var lineBreak = document.createElement('br');
          chat.append(spanFrom);
          chat.append(spanText);
          chat.append(lineBreak);
          chat.scrollTop(chat.prop('scrollHeight') - chat.prop('clientHeight'));
      }
  },

    _onclose : function(m) {
        this._ws = null;
        $('join').className = '';
        $('joined').className = 'hidden';
        $('chat').innerHTML = '';
    },

    _onerror : function(e) {
        alert(e);
    },
     
    _send : function(user, message) {
        user = user.replace(':', '_');
        if (this._ws)
            this._ws.send(user + ':' + message);
    }
};
$(document).ready(function() {
  room.join(USER_ID);
  setInterval(function() {
    room.chat("hearbeat");
  }, 30000 );

  // 2) When user is connected, 'phrase' div is displayed with Chat input + Send button      
  $('#phrase').attr('autocomplete', 'OFF');
  // Enter in the 'phrase' field send the message
  $('#phrase').keyup(function (ev) {
    var keyCode = ev.which;
    if (keyCode === 13 || keyCode === 10) {
      handleSendMessage()
    }
    return true;
  });
  // "Send" button click send the message
  $('#sendB').click(function (event) {
    handleSendMessage()
  });
})

function handleSendMessage(){
  if (isGamificationEnabled()){
    var message = $('#phrase').val();
    room.chat(message);
    var numberOfWords = message.split(' ').length;
    $('#phrase').val('');
    if (numberOfWords>=5){
      playbasis.rule(playbasisToken, "comment", USER_ID, "", "", "", function (response) {
        console.log(response.response.events);
        if (typeof response.response !== 'undefined' && typeof response.response.events !== 'undefined' && response.response.events.length>0){
          if (response.response.events[0].reward_data.name.toLowerCase() ==="commentator") {
            badgeAwardNotification(response, "You have earned the 'Commentator' badge");
          } else if (response.response.events[0].reward_data.name.toLowerCase() ==="evangelist") {
            badgeAwardNotification(response, "You have earned the 'Evangelist' badge");
          }
        }
      });
      
    }
  }
}
       

function readArrayFromLocalstorage(item){
  if (localStorage.getItem(item)===null) {
    return [];
  } else {
    return localStorage.getItem(item).split(CONCEPT_SEPARATOR);
  }
}