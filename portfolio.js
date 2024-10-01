// functions for open and close nav-baar in small divices

 document.querySelector("#open-icon").addEventListener('click', ()=>{
        let openIcon = document.getElementById('open-icon');
        let navMenu =document.querySelector('.nav-menu2');
        let close =document.getElementById('close-icon');

        navMenu.classList.add('slider');
        navMenu.classList.remove('slider2');
        openIcon.style.display ="none";
        close.style.display ="block";
 });

 document.querySelector('#close-icon').addEventListener('click', ()=>{
        let openIcon = document.getElementById('open-icon');
        let navMenu =document.querySelector(".nav-menu2");
        let close =document.getElementById('close-icon');

        navMenu.classList.add('slider2');
        navMenu.classList.remove('slider');
        openIcon.style.display ="block";
        close.style.display ="none";
 });

//  functions for close nav-baar after clicking on links

 let links = document.querySelectorAll(".links");
 links.forEach(link => {
     link.addEventListener('click', ()=>{
        let navMenu = document.querySelector(".nav-menu2");
        setTimeout(() => {
            navMenu.classList.add('slider2');
            navMenu.classList.remove('slider');
        }, 200); // Wait for the transition to complete
    
        let openIcon = document.getElementById('open-icon');
        let close = document.getElementById('close-icon');
        openIcon.style.display = "block";
        close.style.display = "none";
     });
 });

 // function for toggle mini project button
 let mini = document.querySelector(".mini");
 let dwnArw = document.querySelector(".dwn-arw");
 document.querySelector(".mini-btn").addEventListener("click",()=>{
     if(mini.style.display === "none" || mini.style.display === ''){
        mini.style.display = "block";
        dwnArw.classList.toggle('rotate-arrow');
        dwnArw.classList.remove('rotate-arrow1')
     }
     else{
        mini.style.display = "none"
        dwnArw.classList.toggle('rotate-arrow1');
        dwnArw.classList.remove('rotate-arrow')
     }
 })

 // Form Validation

    document.getElementById("contForm").addEventListener('submit',(event)=>{
    
    // Prevent form submission
    event.preventDefault(); 

    // Clear previous error messages
    let errorMessage = '';
    document.getElementById("errorMessage").textContent = '';

    // Get form values
    const fname = document.getElementById("fullname").value.trim();
    const femail = document.getElementById("email").value.trim();
    const fmessage = document.getElementById("message").value.trim();

    // Regular expression to check if email format is valid
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    
    // Regular expression to check if name contains only alphabetic characters (and spaces)
    const namePattern = /^[a-zA-Z\s]+$/;

    //validate name
    if(fname === ''){
        errorMessage += 'Please enter your name.\n';
    }else if(!namePattern.test(fname)){
        errorMessage += '*Name should only contain letters.\n';
    }

    // validate email
    if(femail === ''){
        errorMessage += 'Please enter your email.\n';
    }else if(!emailPattern.test(femail)){
        errorMessage += '*Please enter a valid email address.\n';
    }

    //validate message
    if(fmessage === ''){
        errorMessage += '*Please enter your message.\n';
    }

    // if there are error show them
    if(errorMessage){
        document.getElementById("errorMessage").textContent = errorMessage;
    }else{
        // If no errors, submit the form or process the data
        alert('Form Submitted Succesfully');
    }
   
});