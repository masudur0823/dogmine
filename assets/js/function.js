// humberger start
function handleHumberger() {
    let menu = document.getElementsByClassName("menu_ul");

    if (menu[0].style.left === "-1000px") {
        menu[0].style.left = "0px";
    } else {
        menu[0].style.left = "-1000px"
    }
}
// humberger end