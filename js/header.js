
//만들것: menu를 클릭했을때 안쪽 span 태그들의 각도가 바뀌어야한다
const menu = document.querySelector('.menu');
const menuSpan = document.querySelector('.menu span');

let menuState = false;
menu.addEventListener('click', () => { //menu를 클릭하면 menu모양이 바뀌는 이벤트
  const firstSpan = menu.firstElementChild;
  const midSpan = menu.children[1];
  const lastSpan = menu.lastElementChild;

  console.log(midSpan);

  if (menuState == true) {//클릭했을때 이미 45도면, true이면 열린 상태
    firstSpan.style.transform = 'translate(0px, 0px) rotate(0deg) ';
    midSpan.style.opacity = 1;
    lastSpan.style.transform = 'translate(0px, 0px) rotate(0deg) ';
    menuState = false;
  } else {
    firstSpan.style.transform = 'translate(0px, 13.5px) rotate(45deg)';
    midSpan.style.opacity = 0;
    lastSpan.style.transform = 'translate(0px, -13.5px) rotate(-45deg)';
    menuState = true;
  }
})

//-------------------------
// Event 살펴보기
// const firstInput =document.querySelector('.firstInput');
// firstInput.addEventListener('keyup', (e)=>{
//   console.log(e);
// })

// firstInput.addEventListener('focus',()=>{
//   firstInput.style.backgroundColor = 'rgba(255, 0, 0, 0.2)';
// })

// firstInput.addEventListener('blur', ()=>{
//   firstInput.style.backgroundColor = null;
// })

// firstInput.addEventListener('mousemove', (e)=>{
//   console.log(e);
// })

// const openedMenu = document.querySelector('.openedMenu');
// const circle = document.querySelector('.circle');
// const color = document.querySelector('#color');
// const red = document.querySelector('#red');

// openedMenu.addEventListener('mousemove', (e) => {
//   circle.style.top = `${e.clientY}px`;
//   circle.style.left = `${e.clientX}px`;
// })

// window.addEventListener('resize', (e) => {
//   document.body.innerText = `현재 창 크기는 ${window.innerWidth} x ${window.innerHeight}`;
// })

// openedMenu.addEventListener('click', ()=>{
//   console.log('1 첫번째 메뉴');
// })

// circle.addEventListener('click',()=>{
//   console.log('2 circle');
// })

// color.addEventListener('click',()=>{
//   console.log('2-1 color');
// })

// red.addEventListener('click',()=>{
//   console.log('3 red');
// })

// //------

// const div =document.querySelector('.div');
// const ulList = document.querySelector('.ulList');
// const colors = ulList.children;

// console.log(colors);

// function clickHandler(event){
//   for(c of colors){
//     c.classList.remove('on');
//   }
//   event.target.classList.add('on');
//   console.log('on을 바꿨어')
// }

// document.querySelector('.red').addEventListener('click', clickHandler);
// document.querySelector('.blue').addEventListener('click', clickHandler);
// document.querySelector('.green').addEventListener('click', clickHandler);
// document.querySelector('.pink').addEventListener('click', clickHandler);

// document.querySelector('.ulList').addEventListener('click', clickHandler);






