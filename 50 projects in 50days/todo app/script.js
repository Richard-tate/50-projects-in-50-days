const todoInput = document.querySelector('.input');
const todoList = document.querySelector('.todolist');
const itemsCounter = document.querySelector('.active-todos');
const form = document.querySelector('.form');
const todo = document.querySelectorAll('.todo');



// todo.forEach(todo =>{
//     todo.addEventListener('click', (e) =>{
//          if(e.target.classList.contains('circle')){
//             todo.classList.toggle('checked');
//         }
//         else if(e.target.classList.contains('delete')){
//           todo.style.display = 'none';
//         }
//     });
// });


form.addEventListener('submit', (e)=>{
    e.preventDefault();

    addTodo();
    
});

function addTodo(todo){
    let todoText = input.value;

    if(todo){
        todoText = todo.text;
    }
    if(todoText){
        const todoEl = document.createElement('li');
        todoEl.classList.add('todo');
        todoEl.innerHTML = `<span class="circle"></span>${todoText}<span class="delete"></span>`; 
       
        todoList.appendChild(todoEl);
        todoInput.value = '';
    }
}
 

    



