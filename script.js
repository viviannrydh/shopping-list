let addInput=document.getElementById('add-input');
let add=document.getElementById('add');
let toDoInput=document.getElementById('to-do-input');
let toDoContainer=document.getElementById("to-do-container")
let addInputArray=Array.from(addInput.value);






// add text to the 'att göra' lists;
add.addEventListener('click',()=>{
    if(addInput.value.length==0){
        alert('OPS! The input form is empty! :(')
    } else {
        //toDoInput.value=addInput.value;
        
        createNewInputBox(addInput.value); 
        addInput.value='';
          
    }
});

/*
// add event listener for all the 'Ändra' buttons
let changeButtons=document.getElementsByClassName('change');
let changeButtonsArray=Array.from(changeButtons);
changeButtonsArray.forEach(changeButton=>{ 
    changeButton.addEventListener('click',()=>{
        if(toDoInput.value!=''){
            toDoInput.style.borderColor='red';
            if(button.innerHTML==='Ändra'){
                button.innerHTML="Spara";
            } else {
                toDoInput.style.borderColor='lightgrey';
                button.innerHTML="Ändra";
            }
        } else {
            alert ('Sorry, you can not change/save empty values');
        }
}
)
}
);

// add event listener for all the 'Radera' buttons
let deleteButtons=document.querySelectorAll('.delete');
deleteButtons.forEach(deleteButton=>{ 
    deleteButton.addEventListener('click',()=>{
        deleteButton.parentNode.parentNode.remove();
})});

// add event listener for all the 'färdig' buttons
let doneButtons=document.querySelectorAll('.done');
let doneInput=document.querySelector('#done-input')
doneButtons.addEventListener('click',()=>{
    doneInput.value=toDoInput.value;
    toDoInput.parentNode.remove();

});*/



// this function is defined for creating new input groups, based on how many times the user add text.

function createNewInputBox(userInput){

    let toDoBox=document.createElement('div');
    toDoBox.className='input-group';
    toDoContainer.appendChild(toDoBox);

    let toDoInput=document.createElement('input');
    toDoInput.type='text';
    toDoInput.className="form-control";
    toDoInput.value=userInput;
    toDoBox.appendChild(toDoInput);

    let changeButtons=document.createElement("BUTTON")
     changeButtons.innerHTML = "Ändra";  
     changeButtons.className="btn btn-outline-secondary change";                 
     toDoBox.appendChild(changeButtons);
     
     let doneButtons=document.createElement("BUTTON")
     doneButtons.innerHTML = "Färdig"; 
     doneButtons.className="btn btn-outline-secondary done"  ;                
     toDoBox.appendChild(doneButtons);

    
     let deleteButtons=document.createElement("BUTTON")
     deleteButtons.innerHTML = "Radera";  
     deleteButtons.className="btn btn-outline-secondary delete";                 
     toDoBox.appendChild(deleteButtons);
};