




/*function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
 s = checkTime(s);
  var y = d.getFullYear();
  var m = d.getMonth();
  var nb = d.getDate();
  document.getElementById('txt').innerHTML = "nous sommes le" +nb+m+y+" "+h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};
  return i;
}*/

window.addEventListener("load",function what(){
var dateObj = new Date();
var month = dateObj.getUTCMonth() + 1; //months from 1-12
var day = dateObj.getUTCDate();
var year = dateObj.getUTCFullYear();
  var today = new Date();
var h = today.getHours();
var m = today.getMinutes();
var s = today.getSeconds();
m = checkTime(m);
  s = checkTime(s);
  for (var i =0; i<3; i++){
  document.getElementsByClassName('txt')[i].innerHTML = "Nous sommes le " +day + "/" + month  + "/" + year +" " + "et il est " + h+"h"+m+".";
  if (m<12 || m>23 ){
      document.getElementsByClassName('open')[i].innerHTML = "Nous sommes actuellement fermés."
  }
  else {
    document.getElementsByClassName('open')[i].innerHTML = "Nous sommes actuellement ouverts."
  }
}
},false);
  function checkTime(i) {
  if (i < 10) {i = "0" + i};
  return i;
}


function fadeout(){
     var words = [
         'Bienvenue',
         'Chez',
         'Lorem',
     ]
     var i = 0;
     setInterval(function() {
       $("#yo").fadeOut(function() {
         i++
         if(i == words.length){
             i = 0;
         }
         $(this).html(words[i]).fadeIn();
       });
   }, 2000);
 }

window.addEventListener("load",function test() {
  var controller = new ScrollMagic.Controller();
   var a = document.getElementsByClassName('test');
 var t=TweenLite.from(a, 3, {left:"-1300px"});
  var te=TweenLite.to(a, 3, {left:"0px"});
   var scene = new ScrollMagic.Scene({
  offset:200
})
.setTween(te)
  .setTween(t)
  .addTo(controller);
},false);

var slideIndex = 0;


window.addEventListener("load",function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 1500);
},false);
