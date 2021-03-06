// Selectors
const userInput = document.getElementById('todo-input');
const enterBtn = document.getElementById('todo-enter');
const createList = document.getElementById('display-task');
const deleteTaskBtn = document.getElementById('delete');
const checkedBtn = document.getElementById('check');
const todosOnList = [];

// Event Listeners
enterBtn.addEventListener('click',checkForUserInput); 
//checkedBtn.addEventListener('click',checkTask);
//deleteTaskBtn.addEventListener('click',deleteTask);


function checkForUserInput(){
    if(userInput.value.length == 0){
        alert("Please enter a task");
    }else{
        addNewTask();
        userInput.value = " ";

    }
};

function addNewTask (){
   
   createList.innerHTML += 
   `<li >
   ${createList.children.length + 1}  
    <span class='notCheckOff'>${userInput.value} </span>
    <button id='delete'  onclick='deleteTask(event)'><i class="fa-solid fa-circle-xmark"></i></button>
    <button id='check'  onclick='checkTask(event)'><i class="fa-solid fa-circle-check"></i></button>
    </li>`;

        todosOnList.push(createList);
        console.log(todosOnList[0]);  
         
}


function deleteTask(e){
    e.preventDefault();
    var element = e.target;
        element.parentElement.parentElement.remove();
    
};


function checkTask(e){
    e.preventDefault();
    var element = e.target;
    element.parentElement.parentElement.classList.toggle('checkOff');
    
};



// Trigger enterBtn on Enter key
userInput.addEventListener('keyup',function onEvent(event){
    event.preventDefault();
    if(event.key === "Enter" ){
        document.getElementById('todo-enter').click();   
    }
    });







/*    

function crossOff(){
    if(checkedBtn.onclick === true){
        
    }
}
deleteTaskBtn.addEventListener('click', function deleteTask(event){
        event.currentTarget.parentElement.remove();
        });
    


function deleteTask (e){
   e.target.parentElement.remove();
    

    e.preventDefault();
    e.currentTarget.parentElement.remove();
}

for(var i = 0; i < todosOnList.length; i++){
  // console: print the clicked <p> element
  todosOnList[i].addEventListener('click', );
}
// console: print <body>
document.body.addEventListener('click', hide, false);



 const newTask ={
            number: createList.children.length + 1,
            input: userInput.value,
            deleteBtn: createElement.innerHTML+= `<button id='delete'  onclick='deleteTask()'><i class="fa-solid fa-circle-xmark"></i></button>`,
            checkBtn: createElement.innerHTML+= `<button id='checked' onclick ='crossOff()'><i class="fa-solid fa-circle-check"></i></button>`
        } 

*/

