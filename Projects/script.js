// functions for navbaar menu's hide and block

document.querySelector("#hamburger").addEventListener("click",displayMenu1);

function displayMenu1(){
    let menu1 = document.querySelector("#menu");
    menu1.style.display="block";
}

document.querySelector("#close-icon").addEventListener("click",hideMenu1);

function hideMenu1(){
    let hide1 = document.querySelector("#menu");
    hide1.style.display="none";
}

// function for categories-button
document.querySelector("#categories-button").addEventListener("click",displayMenu2);

function displayMenu2(){
    let menu2 = document.querySelector("#menu2");
    if(menu2.style.display === "none" || menu2.style.display === ""){
        menu2.style.display = "block"
    }else{
        menu2.style.display="none";
    }    
}


// functions for country icon
document.querySelector("#country").addEventListener("mouseover",toggleCountry);
document.querySelector("#country").addEventListener("mouseout",toggleCountryOut);

function toggleCountry(){
    let country = document.querySelector("#toggle-country");
    country.style.display="block";
}
function toggleCountryOut(){
    let country = document.querySelector("#toggle-country");
    country.style.display="none";
}

// functions for Favourite icon
document.querySelector("#Favourite").addEventListener("mouseover",toggleFavourite);
document.querySelector("#Favourite").addEventListener("mouseout",toggleFavouriteOut);


function toggleFavourite(){
    let country = document.querySelector("#toggle-favourite");
    country.style.display="block";
}
function toggleFavouriteOut(){
    let country = document.querySelector("#toggle-favourite");
    country.style.display="none";
}

// function for footer menu open and hide

document.querySelector("#openShop").addEventListener("click",openShop);
let openshop = document.getElementById("openShop");

document.querySelector("#sell").addEventListener("click",openSell);
let opensell = document.getElementById("sell");

document.querySelector("#about").addEventListener("click",openAbout);
let openabout = document.getElementById("about");

document.querySelector("#help").addEventListener("click",openHelp);
let openhelp = document.getElementById("help");

function openShop() {
    let shopOption = document.getElementById("shop-option");
    let downarrow = document.getElementById("down-arrow1");

    if (shopOption.style.display === "none" || shopOption.style.display === "") {
        shopOption.style.display = "block";
        openshop.style.backgroundColor = "#4c59b9";
        downarrow.style.transform = 'rotate(180deg)';
    } else {
        shopOption.style.display = "none";
        openshop.style.backgroundColor = "#3140af";
        downarrow.style.transform = 'rotate(360deg)';
    }
}
function openSell(){
    let sellOption = document.getElementById("sell-option");
    let downarrow = document.getElementById("down-arrow2");

    if (sellOption.style.display === "none" || sellOption.style.display === "") {
        sellOption.style.display = "block";
        opensell.style.backgroundColor ="#4c59b9";
        downarrow.style.transform = 'rotate(180deg)';
    } else {
        sellOption.style.display = "none";
        opensell.style.backgroundColor ="#3140af";
        downarrow.style.transform = 'rotate(360deg)';
    }
}

function openAbout(){
    let aboutOption = document.getElementById("about-option");
    let downarrow = document.getElementById("down-arrow3");

    if (aboutOption.style.display === "none" || aboutOption.style.display === "") {
        aboutOption.style.display = "block";
        openabout.style.backgroundColor = "#4c59b9";
        downarrow.style.transform = 'rotate(180deg)';
    } else {
        aboutOption.style.display = "none";
        openabout.style.backgroundColor = "#3140af";
        downarrow.style.transform = 'rotate(360deg)';
    }
}
function openHelp(){
    let helpOption = document.getElementById("help-privacy");
    let downarrow = document.getElementById("down-arrow4");

    if (helpOption.style.display === "none" || helpOption.style.display === "") {
        helpOption.style.display = "block";
        openhelp.style.backgroundColor ="#4c59b9";
        downarrow.style.transform = 'rotate(180deg)';
    } else {
        helpOption.style.display = "none";
        openhelp.style.backgroundColor ="#3140af";
        downarrow.style.transform = 'rotate(360deg)';
    }
}

