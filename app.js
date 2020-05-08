//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');


//Event liSteners
todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteCheck);
filterOption.addEventListener('click',filterTodo);
//functions
function addTodo(event){

    //prevent form from submitting
  event.preventDefault();
    //todo div

    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //create li

    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    //check btn
    const completeButton = document.createElement('button');
    completeButton.innerHTML = '<i class="fas fa-check"></i>';
    completeButton.classList.add('complete-btn');
    todoDiv.appendChild(completeButton);
    
    // check mark button
    const trashButton = document.createElement('button');
    trashButton.innerHTML= '<i class ="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);
    

    // apend to list
    todoList.appendChild(todoDiv);
    //clear to do input value
    todoInput.value = "";
}

function deleteCheck(e){
    const item = e.target;
    //delete todo
    if(item.classList[0]==="trash-btn"){
        const todo = item.parentElement;

        //animation
        todo.classList.add('fall');
        todo.addEventListener('transitionend',function(){
            todo.remove();
        });

    }
    // chk mark
    if(item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
   
}

function filterTodo(e) {
    const todos = document.querySelectorAll('.todo');
    // i finr childrens with selector alll
    todos.forEach((todo) => {
      switch(e.target.value) {
        case 'all':
          todo.style.display = 'flex';
          break;
        case 'completed':
          if(todo.classList.contains('completed')) {
            todo.style.display = 'flex';
          } else {
            todo.style.display = 'none';
          }
          break;
        case 'uncompleted':
          if(!todo.classList.contains('completed')) {
            todo.style.display = 'flex';
          } else {
            todo.style.display = 'none';
          }
          break;
      }
    })
  }