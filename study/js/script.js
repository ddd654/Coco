// // console.log(3.141592)
// const a = 10;
// const b = 2;
// // constant는 불변
// let myName = 'coco';

// console.log(a + b);
// console.log(a * b);
// console.log(a / b);
// console.log('hello ' + myName)

// // let은 업데이트 할 수 있다
// myName = 'coconut';

// console.log('your nuw name is ' + myName);

// ----

// const amIFat = null;
// let something;
// console.log(something, amIFat);

// ----

// const mon = 'mon';
// const tue = 'tue';
// const wed = 'wed';
// const thu = 'thu';
// const fri = 'fri';
// const sat = 'sat';
// const sun = 'sund';

// const daysOfWeek = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// // const nonsense = [1, 2, 'coco', false, null, true, undefined, 'coconut'];

// //Get Item
// console.log(daysOfWeek[4]);

// //Add one more day to the array
// daysOfWeek.push('sun');

// console.log(daysOfWeek);

// //배열에 김밥 추가하기
// const toBuy = ['potato', 'apple', 'toamte']
// toBuy.push('kimbab');
// console.log(toBuy);

// ----

// const playerName = 'coco';
// const palayerPoints = 1212;
// const playerHandsome = false;
// const playerFat = 'little bit';

// const player = ['coco', 1212, false, 'little bit'];

// const player = {
//   name: 'coco',
//   points: 10,
//   fat: false,
// };

// console.log(player);
// player.fat = true;
// player.lastName = 'coconut';
// player.points += 289 + 1;
// console.log(player);

// console.log(player);
// console.log(player.name);
// console.log(player['name']);

// ----

// function sayHello(nameOfPerson, age) {
//   console.log('Hello my name is ' + nameOfPerson + " and i'm " + age);
// }

// console.log('my name is coco');
// console.log('my name is coco');
// console.log('my name is coco');
// console.log('my name is coco');
// console.log('hello');

// sayHello('coco', 22);
// sayHello('jhon', 12);
// sayHello('chris', 33);

// function plus(firstNumber, secondNumber) {
//   console.log(firstNumber, secondNumber);
// }

// function divide(a, b) {
//   console.log(a / b);
// }

// plus(5, 40);
// divide(10, 3);

//----
// const player1 = {
//   name: 'coco',
// };

// function sayHello(otherPersonsName) {
//   console.log('hello ' + otherPersonsName + ' nice to meet you');
// }

// const player = {
//   name: 'coco',
//   sayHello: function (otherPersonsName) {
//     console.log('hello ' + otherPersonsName + ' nice to meet you');
//   },
// };

// const player2 = {
//   name: 'momo',
// };

// //많이 헷갈린다
// //이게 function의 형식이 같은것만 쓰고싶다!!!
// //변수 이름이 player이고, 그 안의 name의 값을 로그에 찍는다
// console.log(player.name);
// console.log(player2.name);

// //변수 이름인 player 안에다가 name이 coconut인 값을 넣었다
// //변수 안에 기능을 만들고, 그 기능에 출력하는 기능을 넣어본다
// //변수 player의 sayHello의
// player.sayHello('coconut');
// player.sayHello('chris');
// player.sayHello('jhon');

// function sayHello(personsName) {
//   console.log('hellory ' + personsName);
// }
// sayHello('dodo');

//----

// const a = 4;
// let isCocoFat = false;

// isCocoFat = true;

//----
// let hello;
// console.log(hello);

// const toBuy = ['potato', 'tomato', 'apple'];
// console.log(toBuy[2]);
// toBuy[2] = 'bowl';
// console.log(toBuy);
// toBuy.push('fourth');
// console.log(toBuy);

//----

// const player = {
//   name: 'coco',
//   age: 33,
// };

// console.log(player);

// player.name = 'coconut';
// console.log(player);
// player.newItem = 'song';
// console.log(player, console);

// function plus(a, b) {
//   console.log(a + b);
// }

// plus(2, 3);
// plus(435, 323);

// function minusfive(a) {
//   console.log(a - 5);
// }

// minusfive(2020);

//----

// const calculator = {
//   plus: function (a, b) {
//     return a + b;
//     console.log('coco'); //return 후에는 코드
//   },
//   minus: function (a, b) {
//     return a - b;
//   },
//   times: function (a, b) {
//     return a * b;
//   },
//   divide: function (a, b) {
//     return a / b;
//   },
//   power: function (a, b) {
//     return a ** b;
//   },
// };

// // calculator.plus(5, 2);
// // calculator.minus(2, 1);
// // calculator.power(3, 2);
// // console.log();

// //5
// //return을 하면 끝
// const plusResult = calculator.plus(2, 3);

// //-5
// const minusResult = calculator.minus(plusResult, 10);

// const timesResult = calculator.times(minusResult, plusResult);
// const divideResult = calculator.divide(timesResult, plusResult);
// const powerResult = calculator.power(divideResult, minusResult);

// console.log(plusResult);

//-----

// const age = 96;
// function calculateKrAge(ageOfForeigner) {
//   ageOfForeigner + 2;
//   return 'hello';
// }

// const KrAge = calculateKrAge(age);
// console.log(KrAge);

//----

// const age = prompt('How old are you?');

//type 보는 방법, type check
// console.log(typeof '15', typeof parseInt('15'));
// console.log(age, parseInt(age));

// console.log(age, parseInt(age));

// NaN == Not a Number
// const age = parseInt(prompt('How old are you?'));
// console.log(age);

//----

// const age = parseInt(prompt('How old are you?'));

// //only true or false
// if (isNaN(age) || age < 0) {
//   //condition === true
//   console.log('Please write a real positive number');
// } else if (age < 18) {
//   //condition === false
//   console.log('You are too young.');
// } else if (age >= 18 && age <= 50) {
//   console.log('You can drink.');
// } else if (age > 50 && age <= 80) {
//   console.log("You don't have drink.");
// } else if (age === 100) {
//   console.log('You are wise');
// } else if (age > 80) {
//   console.log('You can do whatever you want.');
// }

//----

//document로 html을 다룰 수 있다?

//----

// const tilte = document.getElementById('something');

// tilte.innerText = 'Got you';

// console.log(title.id);
// console.log(title.className);

//-----

// const title = document.querySelector('.hello h1');
// const title2 = document.getElementById('#hello h1');

// console.log(title);

//----

// const title = document.querySelector('div.hello:first-child h1');

// function handleTitleClick() {
//   console.log('title was clicked!'); //클릭하면 로그 찍기
//   title.innerText = 'hello'; //글씨 Hello
//   title.style.color = 'blue'; //글씨 파란색으로 바꾸기
// }

// //타이틀을 클릭하면 handleTitleClick을 실행한다
// title.addEventListener('click', handleTitleClick);

//----

// const h1 = document.querySelector('div.hello:first-child h1');

// //title의 속성보기
// console.dir(h1);

// //글자를 회색으로 바꾼다
// h1.style.color = 'gray';

// //클릭하면 발생하는 현상들
// function handleTitleClick() {
//   console.log('title was clicked!');
//   h1.style.fontSize = '30px';
//   h1.style.color = 'blue';
// }

// function mouseEnter() {
//   h1.innerText = 'mouse is here';
// }

// function mouseLeave() {
//   h1.innerText = 'mouse is gone';
// }

// //화면 크기가 바뀔때 색이 바뀐다
// function handleWindowResize() {
//   document.body.style.backgroundColor = 'tomato';
// }

// function windowCopy() {
//   alert('copier');
// }

// function windowOffline() {
//   alert('no wifi');
// }
// function windowOnline() {
//   alert('all good');
// }

// //event listening
// // title.addEventListener('click', handleTitleClick);
// h1.addEventListener('click', handleTitleClick);
// h1.addEventListener('mouseenter', mouseEnter);
// h1.addEventListener('mouseleave', mouseLeave);

// window.addEventListener('resize', handleWindowResize);
// window.addEventListener('copy', windowCopy);
// window.addEventListener('offline', windowOffline);
// window.addEventListener('online', windowOnline);

// handleTitleClick() //괄호는 실행의 의미

//----
//element찾기
//event를 listen하기
// //event에 반응하기
// const h1 = document.querySelector('div.hello:first-child h1');

// function titleClick() {
//   const currentColor = h1.style.color;
//   let newColor; //바뀔 수 있는 값
//   if (currentColor == 'blue') {
//     newColor = 'tomato';
//   } else {
//     newColor = 'blue';
//   }
//   h1.style.color = newColor; //이 방법은 css가 더 좋다
// }

// h1.addEventListener('click', titleClick);

// const h1 = document.querySelector('div.hello:first-child h1');

// function titleClick() {
//   const clickedClass = 'clicked'; //클린코드를 위한 변수
//   if (h1.className == clickedClass) {
//     h1.className = ''; //클래스 이름 변경
//   } else {
//     h1.className = clickedClass;
//   }
// }

// h1.addEventListener('click', titleClick);

// const h1 = document.querySelector('div.hello:first-child h1');

// function titleClick() {
//   const clickedClass = 'clicked'; //클린코드를 위한 변수
//   if (h1.classList.contains(clickedClass)) {
//     h1.classList.remove(clickedClass);
//   } else {
//     h1.classList.add(clickedClass);
//   }
// }

// h1.addEventListener('click', titleClick);

// const h1 = document.querySelector('div.hello:first-child h1');

// function titleClick() {
//   h1.classList.toggle('clicked');
//   //clicked가 있으면 토글이 clicked를 없애고
//   //clicked가 없으면 토글이 clicked를 만든다
//   //상태를 바꾸는 토글
// }

// h1.addEventListener('click', titleClick);

// 로그인 글자 길이
// const loginInput = document.querySelector('#login_form input');
// const loginButton = document.querySelector('#login_form button');

// function loginClick() {
//   const username = loginInput.value;
//   if (username == '') {
//     console.log('please write your name');
//   } else if (username.length > 15){
//     console.log('your name is too long')
//   }
// }

// loginButton.addEventListener('click', loginClick);

// const loginForm = document.querySelector('#login_form');
// const loginInput = document.querySelector('#login_form input');

// const link = document.querySelector('a');

// function loginSubimit(coco) {
//   //coco에 argument를 넣고 그걸 js에게 준다
//   coco.preventDefault(); //브라우저의 기본동작 막기
//   const username = loginInput.value;
//   console.log(coco);
// }

// loginForm.addEventListener('submit', loginSubimit);

// //변수 만들기
// const loginForm = document.querySelector('#login_form');
// const loginInput = document.querySelector('#login_form input');
// const greeting = document.querySelector('#greeting');

// function loginSubimit(event) {
//   event.preventDefault();
//   loginForm.classList.add('hidden'); //로그인 폼에 히든 클래스 추가
//   const username = loginInput.value;
//   console.log(username); //콘솔 로그 찍기
// }

// const HIDDEN_CLASSNAME = 'hidden';

// function loginSubimit(event) {
//   event.preventDefault();
//   loginForm.classList.add(HIDDEN_CLASSNAME);
//   const username = loginInput.value;
//   // greeting.innerText = 'Hello ' + username; //아래랑 똑같음
//   greeting.innerText = `Hello ${username} nyam`; //새로운 방법 ``백틱기호
//   greeting.classList.remove(HIDDEN_CLASSNAME);
// }

// loginForm.addEventListener('submit', loginSubimit);

//변수 만들기
const loginForm = document.querySelector('#login_form');
const loginInput = document.querySelector('#login_form input');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = 'hidden';

function loginSubimit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  // greeting.innerText = 'Hello ' + username; //아래랑 똑같음
  greeting.innerText = `Hello ${username} nyam`; //새로운 방법 ``백틱기호
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener('submit', loginSubimit);
