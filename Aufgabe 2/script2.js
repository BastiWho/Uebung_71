function showText() {
    var text = document.getElementById("textInput").value;
    var notification = document.getElementById("showInputText");
    notification.innerHTML = "Dein eingegebener Text lautet: " + text;
}