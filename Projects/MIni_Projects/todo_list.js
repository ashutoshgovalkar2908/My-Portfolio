const inputFeild = document.querySelector("#inputFeild");
const AddOnBtn = document.querySelector(".AddOnBtn");
const goals = document.querySelector(".goals");
const clearAllBtn = document.querySelector(".clearAllBtn");

AddOnBtn.addEventListener("click", ()=>{

    if(inputFeild.value === ""){
        alert("Please enter a goal");
        return;
    }

    const inputValue = inputFeild.value;
    const goalItem = document.createElement("div");
    goalItem.classList.add("goalItem");
    goals.appendChild(goalItem);

    const goalText = document.createElement("span");
    goalText.textContent = inputValue;
    goalItem.appendChild(goalText);

    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";
    goalItem.appendChild(completeBtn);

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    goalItem.appendChild(removeBtn);

    clearAllBtn.style.display = "block";

    removeGoal(removeBtn);
    completeGoal(completeBtn,removeBtn);
    
    inputFeild.value = "";

})

clearAllBtn.addEventListener("click", ()=>{
    goals.innerHTML = "";
    clearAllBtn.style.display = "none";
})

function removeGoal(removeGoalBtn){
    removeGoalBtn.addEventListener("click", (e)=>{
        removeGoalBtn.parentElement.remove();
    })       
}

function completeGoal(completeGoalBtn,removeButton){
    completeGoalBtn.addEventListener("click", (e)=>{
        removeButton.remove();
        completeGoalBtn.textContent = "Done"
        
})}