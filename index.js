function changeText() {
    var text = document.querySelector(".jorr");
    if (text.innerHTML == "JORRVASKR") {
        text.innerHTML = "SKYRIM";
    } else {
        text.innerHTML = "JORRVASKR";
    }
}

setInterval(changeText, 2000);
