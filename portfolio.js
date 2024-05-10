function openMenu(){
    let openIcon = document.getElementById('open-icon');
    let navMenu =document.querySelector(".nav-menu2");
    let close =document.getElementById('close-icon');

    navMenu.style.display ="block";
    openIcon.style.display ="none";
    close.style.display ="block";
     
}
function closeMenu(){
    let openIcon = document.getElementById('open-icon');
    let navMenu =document.querySelector(".nav-menu2");
    let close =document.getElementById('close-icon');
    navMenu.style.display ="none";
    openIcon.style.display ="block";
    close.style.display ="none";
     
}

document.querySelector(".login").addEventListener("click",submitMsg);

function submitMsg(){
    console.log("Form Submitted Successfully!"); 
}

// document.getElementById('open-icon').addEventListener('click', function() {
//     document.querySelector('.home').classList.toggle('blur');
//   });