// array 속이랑 이름 같게
const images = ['00.jpg', '01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg'];

// floor 메소드는 값을 내림한다
const chosenImage = images[Math.floor(Math.random() * images.length)];

// console.log(chosenImage);

// javaScript에서 Html에게 Element 만들어주기
const bgImage = document.createElement('img');
// javaScript에게 시키기
bgImage.src = `img/${chosenImage}`;
// console.log(bgImage);
//마지막으로 bgImage 을 Html에 만들어주기

// html body에 bgImage를 추가한다
document.body.appendChild(bgImage);
// document.body.prepend(bgImage);
