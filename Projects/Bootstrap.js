
// Select all elements with the .learnMore class
const learnMoreElements = document.querySelectorAll(".learnMore");

// Iterate over each .learnMore element and add event listeners
learnMoreElements.forEach(element => {
    element.addEventListener("mouseover", forwardIcon);
    element.addEventListener("mouseleave", reverseIcon);
});

// Select all forward-arrow img elements with the .forward class
const forwardIcons = document.querySelectorAll(".forward");

// Function to move the icon forward
function forwardIcon() {
    // Find the corresponding icon within the same .learnMore element
    const icon = this.querySelector(".forward");
    if (icon) {
        icon.style.transform = "translateX(5px)";
        icon.style.transition = "transform .2s ease-in-out";
    }
}

// Function to move the icon back to its original position
function reverseIcon() {
    // Find the corresponding icon within the same .learnMore element
    const icon = this.querySelector(".forward");
    if (icon) {
        icon.style.transform = "translateX(0px)";
        icon.style.transition = "transform .2s ease-in-out";
    }
}


//functions for hide and show nav baar for small devices

let openNav = document.querySelector("#openNav");
let closebtn = document.querySelector("#clsBtn");
let main = document.querySelector("#main");
let head = document.querySelector("#head");

openNav.addEventListener("click", toggleNav);
closebtn.addEventListener("click", toggleNav);

function toggleNav(){
    let navSmall = document.querySelector("#navSmall");

    if(navSmall.style.display == "block"){
        navSmall.style.display = "none";
        main.style.opacity = "1";
        main.style.transition = "all .188s";
    }else{
        navSmall.style.display = "block";
        main.style.opacity = "0.5";
        main.style.transition = "all .188s";
    }
}

//functions for chnage backgroundColor and color for components ,utility API section2 ul's li

let customizeBtn1 = document.querySelector("#cstmBtn1");
let customizeBtn2 = document.querySelector("#cstmBtn2");
let customizeBtn3 = document.querySelector("#cstmBtn3");

customizeBtn2.addEventListener("click", roundedBorder1);
customizeBtn1.addEventListener("click", roundedBorder2);
customizeBtn3.addEventListener("click", roundedBorder3);

function roundedBorder1(){
    customizeBtn2.style.backgroundColor = "#0d6efd";
    customizeBtn2.style.borderRadius = "6px";
    customizeBtn2.style.color = "#fff";
    customizeBtn2.style.transition = "all .3s"
    customizeBtn1.style.backgroundColor = "";
    customizeBtn1.style.color = "#6ea8fe";
    customizeBtn3.style.backgroundColor = "";
    customizeBtn3.style.color = "#6ea8fe";
}
function roundedBorder2(){
    customizeBtn1.style.backgroundColor = "#0d6efd";
    customizeBtn1.style.borderRadius = "6px";
    customizeBtn1.style.color = "#fff";
    customizeBtn1.style.transition = "all .3s"
    customizeBtn2.style.backgroundColor = "";
    customizeBtn2.style.color = "#6ea8fe";
    customizeBtn3.style.backgroundColor = "";
    customizeBtn3.style.color = "#6ea8fe";
}
function roundedBorder3(){
    customizeBtn3.style.backgroundColor = "#0d6efd";
    customizeBtn3.style.borderRadius = "6px";
    customizeBtn3.style.color = "#fff";
    customizeBtn3.style.transition = "all .3s"
    customizeBtn1.style.backgroundColor = "";
    customizeBtn1.style.color = "#6ea8fe";
    customizeBtn2.style.backgroundColor = "";
    customizeBtn2.style.color = "#6ea8fe";
}

let customizeBtn4 = document.querySelector("#cstmBtn4");
customizeBtn4.addEventListener("click", rounded2);

let customizeBtn5 = document.querySelector("#cstmBtn5");
customizeBtn5.addEventListener("click", rounded1);

let customizeBtn6 = document.querySelector("#cstmBtn6");
customizeBtn6.addEventListener("click", rounded3);

function rounded1(){
    customizeBtn5.style.color = "#6ea8fe";
    customizeBtn5.style.backgroundColor = "#fff";
    customizeBtn5.style.transition = "all .4s"
    customizeBtn4.style.backgroundColor = "#0d6efd";
    customizeBtn6.style.backgroundColor = "#0d6efd";
}

function rounded2(){
    customizeBtn4.style.color = "#6ea8fe";
    customizeBtn4.style.backgroundColor = "#fff";
    customizeBtn4.style.transition = "all .4s"
    customizeBtn5.style.backgroundColor = "#0d6efd";
    customizeBtn6.style.backgroundColor = "#0d6efd";
}

function rounded3(){
    customizeBtn6.style.color = "#6ea8fe";
    customizeBtn6.style.backgroundColor = "#fff";
    customizeBtn6.style.transition = "all .4s"
    customizeBtn4.style.backgroundColor = "#0d6efd";
    customizeBtn5.style.backgroundColor = "#0d6efd";
}