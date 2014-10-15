var USER_ID=localStorage.getItem("userId");

var playbasis = new Playbasis('2767998996');
var playbasisToken;
playbasis.auth('a45ae6e91f0f07125d60f8b92f8948c3', function (result) {
  playbasisToken=result.response.token;
});

window.PBAsyncInit = function(){
      PB.init({
        api_key:'2767998996',
        theme_color :'#393E99',
        playerId :localStorage.getItem("userId")
      });
    };(!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://widget.pbapp.net/playbasis/en/all.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','playbasis-js'));