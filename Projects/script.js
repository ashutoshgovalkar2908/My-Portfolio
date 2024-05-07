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
document.querySelector("#sell").addEventListener("click",openSell);
document.querySelector("#about").addEventListener("click",openAbout);
document.querySelector("#help").addEventListener("click",openHelp);

function openShop() {
    let shopOption = document.getElementById("shop-option");
    if (shopOption.style.display === "none" || shopOption.style.display === "") {
        shopOption.style.display = "block";
    } else {
        shopOption.style.display = "none";
    }
}
function openSell(){
    let sellOption = document.getElementById("sell-option");
    if (sellOption.style.display === "none" || sellOption.style.display === "") {
        sellOption.style.display = "block";
    } else {
        sellOption.style.display = "none";
    }
}

function openAbout(){
    let aboutOption = document.getElementById("about-option");
    if (aboutOption.style.display === "none" || aboutOption.style.display === "") {
        aboutOption.style.display = "block";
    } else {
        aboutOption.style.display = "none";
    }
}
function openHelp(){
    let helpOption = document.getElementById("help-privacy");
    if (helpOption.style.display === "none" || helpOption.style.display === "") {
        helpOption.style.display = "block";
    } else {
        helpOption.style.display = "none";
    }
}

