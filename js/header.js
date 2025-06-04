
//의미: 이걸 작성하면 헤더 메뉴가 만들어진다

//만들것: menu를 클릭했을때 안쪽 span 태그들의 각도가 바뀌어야한다
const menu = document.querySelector('.menu');
const menuSpan = document.querySelector('.menu span');

menu.addEventListener('click', () => { //menu를 클릭하면 menu모양이 바뀌는 이벤트
  const firstSpan = menu.firstElementChild;
  const lastSpan = menu.lastElementChild;

  const currentTransform = firstSpan.style.transform;

  if (currentTransform == 'rotate(45deg) scale(1.1, 1)') {//클릭했을때 이미 45도면
    firstSpan.style.transform = 'rotate(0deg) scale(1.0, 1)';
  } else {
    firstSpan.style.transform = 'rotate(45deg) scale(1.1, 1)'
  }
})


// -- 
// cloneNode, remove, 태그의 부모 형제 자식 선택 방법을 했음

// --
const openedMenu = document.querySelector('.openedMenu');
openedMenu.style.width = '200px';
openedMenu.style.height = '';
openedMenu.style.color = 'white';
// openedMenu.style.backgroundColor = 'greenyellow';
openedMenu.style['fontSize'] = '20px'; //다르게 사용하는 방법
openedMenu.style.border = '10px solid black'


console.log(openedMenu.className);
openedMenu.className = 'bg-red';
console.log(openedMenu.classList);
openedMenu.classList.remove('bg-red');

// setInterval(()=>{
// openedMenu.classList.toggle('bg-red');
// }, 1000)

const color = document.querySelector('#color');

color.onclick = function (e) {
  console.log(e.target);
  const target = e.target;
  console.log(target.tagName);

  if (target.tagName !== 'LI') { return } //LI 태그가 아니면 아무일도
  target.classList.toggle('txt-pink');
}



