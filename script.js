//Magic goes here... 
 
let cat = document.getElementById("cat"),
		shadowBack = document.getElementsByClassName("shadow-2"),
		shadowMed = document.getElementsByClassName("shadow-1"),
		audio = document.getElementById('myAudio'),
		star = document.getElementById('star'),
		tlc = new TimelineLite();
		tl = new TimelineLite();
		isPlaying = false;
		

tlc
	.fromTo(cat, 1, {opacity:1, y:60}, {opacity:1, y:0, delay:2, ease:Power4.easeOut});

tl 
	.fromTo(shadowBack, 2, {opacity:0}, {opacity:.5, repeat:-1, yoyo:true, delay:.5})
	.fromTo(shadowMed, 2, {opacity:.25}, {opacity:.5, repeat:-1, yoyo:true,})


cat.onmouseover = function(e) {
	tlc.reverse();
};
cat.onmouseout = function(e) {
	tlc.play();
};

star.onclick = function(e) {
    if (isPlaying) {
      audio.pause();
      isPlaying = false;
      console.log("暫停");
    } else {
      audio.play();
      isPlaying = true;
      console.log("播放");
    }
}
