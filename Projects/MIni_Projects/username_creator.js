
    // EvenListener for creat username
    document.querySelector('#btn').addEventListener('click',     function userName(event) {
        
        event.preventDefault();
        // accessing inputs field
        let firstName = document.querySelector("#firstname");
        let lastName = document.querySelector("#lastname");
        let backButton = document.querySelector(".back-button");
    
        firstName = firstName.value;
        lastName = lastName.value;
    
        if(firstName === "" ||  lastName === ""){
            alert("Required Inputs");
            return;
        }else{
    
        // loops for checking space between characters
        for (let i = 0; i < firstName.length; i++) {
            if (firstName[i] === " ") {
                firstName = alert("Your firstName has some spaces Please try again...!!!");
                // Restart the loop if there are issues
                i = -1; // Reset the loop counter to check the new full name
            }
        }
    
        for (let i = 0; i < lastName.length; i++) {
            if (lastName[i] === " ") {
                lastName = alert("Your lastName has some spaces Please try again...!!!");
                i = -1;
            }
        }
      }
    
        firstName = firstName.toLowerCase();
        lastName = lastName.toLowerCase();
    
        let randomNum = Math.floor(Math.random() * 89) + 11; // creat random numbers between 11-99
        let username1, username2, username3, username4, username5;
    
        username1 = `${lastName}_${firstName}${randomNum}`;
        randomNum = Math.floor(Math.random() * 89) + 11;
        username2 = `_${lastName.slice(0, 3)}_${firstName.slice(0, 5)}${randomNum}`;
        randomNum = Math.floor(Math.random() * 89) + 12;
        username3 = `${lastName.slice(0, 5)}_${firstName.slice(0, 5)}_${randomNum}`;
        randomNum = Math.floor(Math.random() * 89) + 13;
        username4 = `_${firstName}_${lastName.slice(0, 2)}_${randomNum}`;
        randomNum = Math.floor(Math.random() * 89) + 14;
        username5 = `_${firstName}_${lastName}${randomNum}`;
    
        let output1 = document.querySelector("#output1");
        let output2 = document.querySelector("#output2");
        let output3 = document.querySelector("#output3");
        let output4 = document.querySelector("#output4");
        let output5 = document.querySelector("#output5");
    
        output1.innerText = username1;
        output2.innerText = username2;
        output3.innerText = username3;
        output4.innerText = username4;
        output5.innerText = username5;
    
        let creatorbox = document.querySelector(".creator-box");
        let outputbox = document.querySelector(".output-box");
    
        creatorbox.style.display = "none";
        outputbox.style.display = "block";
        backButton.style.display = "block";
    
    });


    // EventListener on output box to close.
    document.querySelector('.back-button').addEventListener('click', function () {

    let out = document.querySelector('.output-box');
    let creator = document.querySelector('.creator-box');
    let backButton = document.querySelector('.back-button');
    out.style.display = "none";
    creator.style.display= "block";
    backButton.style.display = "none";
});