// const clock = document.querySelector('#clock');

// // html에서 불러서 체크하기
// // clock.innerText = 'coco';

// function getClock() {
//   const date = new Date();
//   // padStart 메서드를 사용
//   // 스트링으로 바꾸고 동시에 숫자를 0 추가해준다
//   const hours = String(date.getHours()).padStart(2, '0');
//   const minutes = String(date.getMinutes()).padStart(2, '0');
//   const seconds = String(date.getSeconds()).padStart(2, '0');
//   clock.innerText = `${hours}:${minutes}:${seconds}`;

//   // clock.innerText = `${date.getHours()}:${date.getMinutes()}:${+date.getSeconds()}`;
//   // if (date.getSeconds < 60){
//   //   date.getSeconds = 02;
//   // }
// }

// //페이지를 시작하자마자 보이게 하는법, js가 getClock을 실행한다
// getClock();

// //인터벌 1초 넣기
// setInterval(getClock, 1000);

// // 3초마다
// // setInterval(sayHello, 3000);

// // 3초 후
// // setTimeout(sayHello, 3000);

// // const date = new Date();
// // date.getDate();
// // console.log(date)


const clock = document.querySelector('#clock');


function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();

setInterval(getClock, 1000);