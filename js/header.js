
//의미: 이걸 작성하면 헤더 메뉴가 만들어진다

//만들것: menu를 클릭했을때 안쪽 span 태그들의 각도가 바뀌어야한다
const menu = document.querySelector('.menu');
const menu_span = document.querySelector('.menu span');

menu.addEventListener('click', ()=>{
  const firstSpan = menu.firstElementChild;
  const lastSpan = menu.lastElementChild;

  firstSpan.style.transform = 'rotate(45deg)';
  //x축 y축 위치 오른쪽 아래로
})


// const li = document.querySelectorAll('li');
// console.log('li All은?',li);

// const li_tag= document.getElementsByTagName('li');
// console.log(li_tag);

// const liList1 = document.querySelector('li');
// const liList2 = document.getElementsByTagName('li');

// console.log(liList1);
// console.log(liList2);

// console.log(document.querySelector('li:nth-of-type(3)').innerHTML)

// for(let li of document.querySelectorAll('li')){
//   li.style.backgroundColor = 'black';
// }

// const red = document.getElementById('red')
// console.log(red.parentNode);
// console.log(red.parentElement);

// console.log(document.documentElement.parentNode);
// console.log(document.documentElement.parentElement);

// console.log(menu.childNodes); //노드 리스트 , 실시간
// console.log(menu.children); //실시간 요소 노드
// console.log(menu.firstChild);
// console.log(menu.firstElementChild);
// console.log(menu.lastElementChild);

// const blue = document.getElementById('blue');
// console.log(blue.previousSibling);
// console.log(blue.nextSibling);

// console.log('hmmm',blue.nextElementSibling);




