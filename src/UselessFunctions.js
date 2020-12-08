useEffect(() => {
  if (loading) {
    console.log(true);
    getSoundCloud();
  } else {
    console.log(false);
  }
});

function getSoundCloud() {
  var SC = require("soundcloud");

  SC.initialize({
    client_id: "dj-marco-pesos197",
  });

  SC.get("/user/tracks").then(function (tracks) {
    console.log(tracks);
  });

  // SC.stream('/tracks').then(function(player){
  //   player.play();
  // });
}
