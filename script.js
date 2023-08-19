
function showRadio() {

    document.getElementById("artistpreferred").style.display = "block";

    const choice1 = document.getElementById("movement1");
    const choice2 = document.getElementById("movement2");

    const movement1 = document.getElementById("prefer1");
    const movement2 = document.getElementById("prefer2");

    const radio1 = document.querySelectorAll(".radio1");
    const radio2 = document.querySelectorAll(".radio2");

    if (!(choice1.checked || choice2.checked)) {
        document.getElementById("artistpreferred").style.display = "none";
    }

    if (choice1.checked) {
        document.getElementById("prefer1").style.display = "block";
    } else { 
        document.getElementById("prefer1").style.display = "none";
    }

    if (choice2.checked) {
        document.getElementById("prefer2").style.display = "block";
    } else {
        document.getElementById("prefer2").style.display = "none";
    }
}
