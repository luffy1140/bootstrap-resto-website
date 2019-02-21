




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
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
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
  if (m<12 || m>23){
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
     // Run la fonction toutes les 2.5 secondes
     setInterval(function() {
       $("#yo").fadeOut(function() {
         // Incremente le mot a affiché
         i++
         if(i == words.length){
             // On remet a 0 si on a fait tout les mots
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
  TweenLite.to(a, 3, {left:"0px"});
   var scene = new ScrollMagic.Scene({
  offset:200
})

  .setTween(t)
  .addTo(controller);
},false);
