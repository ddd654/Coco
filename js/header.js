
//만들것: menu를 클릭했을때 안쪽 span 태그들의 각도가 바뀌어야한다
const menu = document.querySelector('.menu');
const openedMenu = document.querySelector('.openedMenu');

let menuState = false;

//menu를 클릭하면 메뉴 펼쳐지는 이벤트
menu.addEventListener('click', () => { 
  const firstSpan = menu.firstElementChild;
  const midSpan = menu.children[1];
  const lastSpan = menu.lastElementChild;

  console.log(midSpan);

  if (menuState == true) {// menu모양이 'x' 이면 openedMenu가 닫히게
    firstSpan.style.transform = 'translate(0px, 0px) rotate(0deg) ';
    midSpan.style.opacity = 1;
    lastSpan.style.transform = 'translate(0px, 0px) rotate(0deg) ';
    menuState = false;

    openedMenu.style.left = '-300px';
    openedMenu.classList.remove('open');
    openedMenu.classList.add('close');
  } else { // menu모양이 일자이면 openedMenu가 튀어나오게
    firstSpan.style.transform = 'translate(0px, 13.5px) rotate(45deg)';
    midSpan.style.opacity = 0;
    lastSpan.style.transform = 'translate(0px, -13.5px) rotate(-45deg)';
    menuState = true;

    openedMenu.style.left = '0px';
    openedMenu.classList.remove('close');
    openedMenu.classList.add('open');
  }
})






















//-----------------------
