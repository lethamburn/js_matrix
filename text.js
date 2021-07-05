var text1 = "Wake up, Neo...";
var text2 = "The Matrix has you...";
var text3 = "Follow the white rabbit";
var text4 = "Knock, knock, Neo";
var empty = "";
var speed = 140;
var blinkSpeed = 400;
var i = 0;

function enterTheMatrix() {
  if (i < text1.length) {
    document.getElementById("paragraph").innerHTML += text1.charAt(i);
    i++;
    setTimeout(enterTheMatrix, speed);
  }
}

function enterTheMatrix2() {
  if (i < text2.length) {
    document.getElementById("paragraph2").innerHTML += text2.charAt(i);
    i++;
    setTimeout(enterTheMatrix, speed);
  }
}

function enterTheMatrix3() {
  if (i < text3.length) {
    document.getElementById("paragraph3").innerHTML += text3.charAt(i);
    i++;
    setTimeout(enterTheMatrix, speed);
  }
}

function enterTheMatrix4() {
  if (i < text4.length) {
    document.getElementById("paragraph4").innerHTML += text4.charAt(i);
    i++;
    setTimeout(enterTheMatrix, speed);
  }
}

function exitTheMatrix1() {
  if (i < empty.length) {
    document.getElementById("paragraph").innerHTML += empty.charAt(i);
    i++;
    setTimeout(enterTheMatrix, speed);
  }
}

function blink() {
  var bar = document.getElementById("blink");
  setInterval(function () {
    bar.style.display = bar.style.display == "none" ? "" : "none";
  }, blinkSpeed);
}
/* 
setTimeout(function () {
  newP$$.classList.add("animation");
    newP$$.textContent = "The Matrix has you...";
}, second);

setTimeout(function () {
  newP$$.textContent = "Follow the white rabbit";
  newP$$.classList.add("animation");
}, third);

setTimeout(function () {
  newP$$.textContent = "Knock, knock, Neo.";
}, fourth); 
 */
