


var numberOfSongs = document.querySelectorAll(".icon-music-play").length;

for(var i=0;i<numberOfSongs;i++){

  document.querySelectorAll(".icon-music-play")[i].addEventListener("click",function(){

var song1 = new Audio("music/song"+(i)+".mp3");
song1.play();
alert("gowno");

  });
}
