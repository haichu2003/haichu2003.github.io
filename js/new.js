// function menuButton() {
// }

function menuButton() {
    if (document.getElementById("header").style.visibility == "hidden")
        document.getElementById("header").style.visibility = "visible";
    else document.getElementById("header").style.visibility = "hidden";
    if (document.getElementById("headerLink1").style.visibility == "hidden")
        document.getElementById("headerLink1").style.visibility = "visible";
    else document.getElementById("headerLink1").style.visibility = "hidden";
    if (document.getElementById("headerLink2").style.visibility == "hidden")
        document.getElementById("headerLink2").style.visibility = "visible";
    else document.getElementById("headerLink2").style.visibility = "hidden";
    if (document.getElementById("headerLink3").style.visibility == "hidden")
        document.getElementById("headerLink3").style.visibility = "visible";
    else document.getElementById("headerLink3").style.visibility = "hidden";
}

window.onscroll = function scrollFunction() {
    let navbar = document.getElementById("navbar");
    var x, y;
    if (
        document.body.scrollTop > 30 ||
        document.documentElement.scrollTop > 30
    ) {
        navbar.style.display = "none";
        navbar.style.maxHeight = null;
        x = document.body.scrollTop;
        y = document.documentElement.scrollTop;
    } else {
        navbar.style.display = "block";
        navbar.style.maxHeight = "44px";
    }
};
