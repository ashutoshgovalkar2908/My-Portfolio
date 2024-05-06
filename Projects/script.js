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

document.querySelector("#categories-button").addEventListener("click",displayMenu2);

function displayMenu2(){
    let menu2 = document.querySelector("#menu2");
    menu2.style.display="block";
}

document.querySelector("#colse2").addEventListener("click",hideMenu2);

function hideMenu2(){
    let hide2 = document.querySelector("#menu2");
    hide2.style.display="none";
}

// document.querySelector("#search-baar").addEventListener("mouseover",toggleButton);
// document.querySelector("#search-baar").addEventListener("mouseout",toggleButtonOut);

// function toggleButton(){
//     let searchButton = document.querySelector("#search-button");
//     searchButton.style.borderRadius ="0px 50px 50px 0px";
// }

// functions for country and favourite icons for toggle after mouseover and mouseout

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