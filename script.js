
showTodos();
//Button to add a note
  let btn = document.getElementById('btn');
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    let todo = document.getElementById('todo');
    let todos = localStorage.getItem("todos");
    if (todos == null) {
      todos = [];
    }
    else {
      todos = JSON.parse(todos);
      console.log(todos)
    }
    todos.push(todo.value);
    localStorage.setItem("todos", JSON.stringify(todos));
    todo.value = '';
    showTodos();
})


//Function to show elements from localStorage
function showTodos() {
    let todos = localStorage.getItem("todos");
    if (todos == null) {
      todos = [];
    }
    else {
      todos= JSON.parse(todos)
    }
    let html = '';
    todos.forEach((value,index) => {
      html += `<div class="card" >
      <div class="btnBox">
      <button  id= "${index}" onclick="deleteTodo(this.id)" class="btnSm" type="button"><i class="fa-solid fa-trash  fa-xl"></i></i></button>
      </div>
      <div class="cardText"><ul><li>${value}</li></ul></div>
      </div>`;
    })
    let cardBox = document.getElementById('cardBox');
  if (todos.length != 0) {
    cardBox.innerHTML = html;
  }
  else {
    cardBox.innerHTML = "<h1 'style= display:block; margin:auto;'>Nothing to display</h1>"
  }
    }


    // function to delete a note
function deleteTodo(index) {
  let todos = localStorage.getItem("todos");
    if (todos == null) {
      todos = [];
    }
    else {
      todos= JSON.parse(todos)
  }
  todos.splice(index, 1);
  localStorage.setItem("todos", JSON.stringify(todos));
  showTodos()
    }































// function updateTodo() {
//   let todo = JSON.parse(localStorage.getItem('todoList'));
//   todo.forEach((value) => {
//     let cardBox = document.getElementById('cardBox');
//     cardBox.innerHTML +=
//       `<div class="card">
//       <div class="btnBox">
//         <button id="edit" type="button"><i class="fa-regular fa-pen-to-square"></i></i></button>
//         <button id="btnSm2" type="button"><i class="fa-solid fa-trash"></i></i></button>
//       </div>
//       <div class="cardText">${value}</div>
//     </div>`;
//     console.log(cardBox);
//   })
// }
// updateTodo();