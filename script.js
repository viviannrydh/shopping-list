let addInput=document.getElementById('add-input');
let add=document.getElementById('add');
let toDoInput=document.getElementById('to-do-input');


let changeButtons=document.getElementsByClassName('change');
let deleteButtons=document.querySelectorAll('.delete');
let doneButtons=document.querySelectorAll('.done');
let doneInput=document.querySelector('#done-input')
let i=0;



// add text to the 'att göra' lists;
add.addEventListener('click',()=>{
let inputGroup=document.querySelectorAll('.input-row');

    if(addInput.value.length==0){
        alert('OPS! The input form is empty! :(')
    } else {
        inputGroup[i].firstElementChild.value=addInput.value;
        addInput.value='';
        createNewInputBox();
        i++;
        
    }
})


// add event listener for all the 'Ändra' buttons
changeButtons[0].addEventListener('click',()=>{
if(toDoInput.value!=''){
    toDoInput.style.borderColor='red';
    if(changeButtons[0].innerHTML==='Ändra'){
        changeButtons[0].innerHTML="Spara";
    } else {
        toDoInput.style.borderColor='lightgrey';
        changeButtons[0].innerHTML="Ändra";
    }
} else {
    alert ('Sorry, you can not change/save empty values');
}
}
)
// add event listener for all the 'Radera' buttons

deleteButtons[0].addEventListener('click',()=>{
        deleteButtons[0].parentNode.parentNode.remove();
})

// add event listener for all the 'färdig' buttons
doneButtons[0].addEventListener('click',()=>{
    doneInput.value=toDoInput.value;
    toDoInput.parentNode.remove();

})



// this function is defined for creating new input groups, based on how many times the user add text.
let toDoContainer=document.getElementById("to-do-container")
function createNewInputBox(){

    let toDoBox=document.createElement('div');
    toDoBox.className='input-group input-row';
    toDoContainer.appendChild(toDoBox);

    let toDoInput=document.createElement('input');
    toDoInput.type='text';
    toDoInput.className="form-control input-group";
    toDoInput.value='';
    toDoBox.appendChild(toDoInput);

    let changeButton=document.createElement("BUTTON")
     changeButton.innerHTML = "Ändra";  
     changeButton.className="btn btn-outline-secondary change";                 
     toDoBox.appendChild(changeButton);
     
     let doneButton=document.createElement("BUTTON")
     doneButton.innerHTML = "Färdig"; 
     doneButton.className="btn btn-outline-secondary change"  ;                
     toDoBox.appendChild(doneButton);

    
     let deleteButton=document.createElement("BUTTON")
     deleteButton.innerHTML = "Radera";  
     deleteButton.className="btn btn-outline-secondary change";                 
     toDoBox.appendChild(deleteButton);
}


