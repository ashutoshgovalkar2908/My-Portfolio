
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

openNav.addEventListener("click", toggleNav);
closebtn.addEventListener("click", toggleNav);

function toggleNav(){
    let navSmall = document.querySelector("#navSmall");

    if(navSmall.style.display == "block"){
        navSmall.style.display = "none";
    }else{
        navSmall.style.display = "block";
    }
}
