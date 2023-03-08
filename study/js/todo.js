const todoForm = document.querySelector('#todo_form');
const todoInput = document.querySelector('#todo_form input');
const todoList = document.querySelector('#todo_list');

const TODOS_KEY = 'todos';

// todo 리스트 로컬 저장소에 저장하기용 변수
// 업데이트
let todos = [];

function saveTodos() {
  //todos를 string으로 만들어 array에 넣어주기
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deleteTodo(event) {
  // event의 target속에 parentElement 속에 있는
  // console.log(event.target.parentElement);
  // li를 만들고 x 버튼을 누르면 이벤트를 얻는다, 이벤트는 타겟인 버튼을 주고 버튼의 li 제거
  const removeTodo = event.target.parentElement;
  // delete 버튼을 누르면 li 의 id를 로그에 찍는다
  // console.log(removeTodo);
  removeTodo.remove();
  // console.log(typeof removeTodo.id)
  // todo.id 가 li.id와 다르면 todo 한다
  todos = todos.filter((todo) => todo.id !== parseInt(removeTodo.id));
  saveTodos();
}

function paintTodo(newTodo) {
  // console.log('i will paint', newTodo);
  // li span button 만들기
  // 엔터치면 할일 생성되는 기능
  const li = document.createElement('li');
  li.id = newTodo.id;
  const span = document.createElement('span');
  span.innerText = newTodo.text;

  const button = document.createElement('button');
  //emoji win + .
  button.innerText = '❌';
  button.addEventListener('click', deleteTodo);
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
}

function todoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value; // input에서 value를 얻어서
  // console.log(todoInput.value);
  todoInput.value = '';
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  // console.log(newTodo, todoInput.value);
  todos.push(newTodoObj);
  paintTodo(newTodoObj); //paintTodo에 보낸다
  saveTodos();
}

todoForm.addEventListener('submit', todoSubmit);
// JSON.parse(localStorage.getItem(TODOS_KEY));

// function sayHello(item) {
//   console.log('hello', item);
// }

const savedTodos = localStorage.getItem(TODOS_KEY);

// console.log(savedTodos);
if (savedTodos !== null) {
  const parseTodos = JSON.parse(savedTodos);
  // todos 에 parseTodos를 넣어 예전 할일들을 넣어준다
  // 예전 할일들이 새로고침떄마다 지워진다 그래서 넣어줌
  todos = parseTodos;
  // console.log(parseTodos);
  // 위 function과 같음
  // parseTodos.forEach((item) => console.log('hello', item));
  parseTodos.forEach(paintTodo);
}

// function cocoFilter() {}
// [1, 2, 3, 4].filter(cocoFilter);
// cocoFilter(3);
