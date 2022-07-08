// humberger start
function handleHumberger() {
    let menu = document.getElementsByClassName("menu_ul");
    let l1 = document.getElementById("line1");
    let l2 = document.getElementById("line2");
    let l3 = document.getElementById("line3");

    if (menu[0].style.left === "-1000px") {
        menu[0].style.left = "0px";
        l1.style.marginBottom = "-8px"
        l1.style.transform = "rotate(45deg)"
        l2.style.visibility = "hidden"
        l3.style.marginTop = "-8px"
        l3.style.transform = "rotate(-45deg)"
    } else {
        menu[0].style.left = "-1000px"
        l1.style.marginBottom = "0px"
        l1.style.transform = "rotate(0deg)"
        l2.style.visibility = "visible"
        l3.style.marginTop = "0px"
        l3.style.transform = "rotate(0deg)"
    }
}
// humberger end