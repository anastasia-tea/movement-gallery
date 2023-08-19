
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

function showSubmitted() {

    document.getElementById("submitted").style.display = "block";
    document.querySelector(".recommendation").style.display = "none";

    const recommend = document.querySelectorAll(".recommendation");
    const submitted = document.querySelector("#submitted");

    const choice1 = document.getElementById("movement1");
    const choice2 = document.getElementById("movement2");

    const title = document.createElement("p");
    title.classList.add("title");
    title.style = "font-weight: bold";

    const para1 = document.createElement("p");
    para1.classList.add("para1");
    const para2 = document.createElement("p");
    para2.classList.add("para2");

    if ((choice1.checked) || (choice2.checked)) {
        title.textContent = "Submission Sent";
        para1.textContent = "Thank you for sending in your thoughts, and";
        para2.textContent = "I look forward to sending you my recommendations!";
    } else {
        title.textContent = "Thanks For Visiting My Website";
        para1.textContent = "Feel free to fill out your thoughts here, and";
        para2.textContent = "I would love to connect you to more artwork!";
    }

    submitted.appendChild(title);
    submitted.appendChild(para1);
    submitted.appendChild(para2);
}
