// //변수 만들기
// const loginForm = document.querySelector('#login_form');
// const loginInput = document.querySelector('#login_form input');
// const greeting = document.querySelector('#greeting');

// const HIDDEN_CLASSNAME = 'hidden';
// const USERNAME_KEY = 'username'; // 반복되는 string은 변수로 저장해서 사용하면 좋다

// //로그인 submit 되면
// function loginSubimit(event) {
//   event.preventDefault(); //브라우저의 기본 동작 막기
//   loginForm.classList.add(HIDDEN_CLASSNAME); //로그인 폼에 클래스 리스트 '히든' 추가로 숨기기
//   const typedUsername = loginInput.value; //변수에 로그인 인풋값 저장하기
//   localStorage.setItem(USERNAME_KEY, typedUsername); //로컬 저장소에 세트하기
//   // greeting.innerText = 'Hello ' + username; //아래랑 똑같은 효과
//   // greeting.innerText = `Hello ${username} nyam`; //새로운 방법 ``백틱기호로 텍스트 추가하기
//   // greeting.classList.remove(HIDDEN_CLASSNAME); // 클래스 '히든' 삭제하기
//   paintGreetings(typedUsername);
// }

// loginForm.addEventListener('submit', loginSubimit);

// //----

// function paintGreetings(typedUsername) {
//   //이 함수는 인자를 받을 필요없다. 로컬 저장소에 유저정보가 있기 때문이다.

//   greeting.innerText = `Hello ${typedUsername}`;
//   greeting.classList.remove(HIDDEN_CLASSNAME);
// }

// //username 저장하기, 변수로 고정하기
// const savedUsername = localStorage.getItem(USERNAME_KEY);

// // console.log(savedUsername);

// if (savedUsername === null) {
//   // 유저 정보가 로컬 저장소에 없으면
//   // show the form
//   loginForm.classList.remove(HIDDEN_CLASSNAME);
//   // 유저의 입력을 기다려야 한다
//   loginForm.addEventListener('submit', loginSubimit);
// } else {
//   // 유저 정보가 있으면
//   // show the greetings
//   // 아래가 반복되기에 함수로 만들어 넣는다
//   // greeting.innerText = `Hello ${savedUsername}`;
//   // greeting.classList.remove(HIDDEN_CLASSNAME);
//   paintGreetings(savedUsername);
// }

//----
const loginForm = document.querySelector('#login_form');
const loginInput = document.querySelector('#login_form input');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

function loginSubimit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const typedUsername = loginInput.value;
  localStorage.setItem(USERNAME_KEY, typedUsername);
  paintGreetings(typedUsername);
}

loginForm.addEventListener('submit', loginSubimit);

function paintGreetings(typedUsername) {
  greeting.innerText = `Hello ${typedUsername}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername == null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener('submit', loginSubimit);
} else {
  paintGreetings(savedUsername);
}
