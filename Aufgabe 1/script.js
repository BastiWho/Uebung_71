// Hintergrundfarbe ändern
var changeBackgroundButton = document.getElementById("changeBackgroundButton");
changeBackgroundButton.addEventListener("click", function() {
  document.body.style.backgroundColor = getRandomColor();
});

// Rand anzeigen/verstecken
var toggleBorderButton = document.getElementById("toggleBorderButton");
var content = document.querySelector(".content");
toggleBorderButton.addEventListener("click", function() {
  content.style.border = content.style.border ? "" : "5px dotted #000";
});

// Farbe ändern
var changeColorButton = document.getElementById("changeColorButton");
changeColorButton.addEventListener("click", function() {
  content.style.backgroundColor = getRandomColor();
});

// Zufällige Farbe generieren
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}