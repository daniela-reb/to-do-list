const todoList =JSON.parse(localStorage.getItem('todoList')) || [{
    name:'make dinner',
    dueDate:'29-03-2024'
}, {
    name:'spala vase',
    dueDate: '23-03-2024'
}];

renderTodoList();

function renderTodoList() {
    let todoListHTML = '';

    for(let i=0; i< todoList.length; i++){
        const todoObject= todoList[i];
        const name = todoObject.name;
        const dueDate = todoObject.dueDate;

        const html =`<div>${name}</div>
        <div>${dueDate}</div> 
        <button onclick = "
        todoList.splice(${i}, 1);
        renderTodoList();
        " class="delete-todo-button">Delete</button></p>`;
        todoListHTML += html;
    }

   
    document.querySelector('.js-todo-list').innerHTML= todoListHTML;
}


function addTodo() {
  
    const inputElement = document.querySelector('.name-input');
    const name = inputElement.value;
    
    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;

    todoList.push({
        name: name,
        dueDate: dueDate
    });


    inputElement.value = '';
    renderTodoList();
    saveToStorage();
}
function saveToStorage(){
    localStorage.setItem('todoList',JSON.stringify(todoList));
}