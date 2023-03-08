const quotes = [
  {
    quote: '삶이 있는 한 희망은 있다.',
    author: '-키케로',
  },
  {
    quote: '언제나 현재에 집중할 수 있다면 행복할 것이다.',
    author: '-파울로 코엘료',
  },
  {
    quote:
      '진정으로 웃으려면 고통을 참아야 하며, 나아가 고통을 즐길 줄 알아야 해',
    author: '-찰리 채플린',
  },
  {
    quote: '직업에서 행복을 찾아라. 아니면 행복이 무엇인지 절대 모를 것이다',
    author: '-엘버트 허버드',
  },
  {
    quote: '행복의 문이 하나 닫히면 다른 문이 열린다',
    author: '-헬렌켈러',
  },
  {
    quote: '피할수 없으면 즐겨라',
    author: '-로버트 엘리엇',
  },
  {
    quote: '1퍼센트의 가능성, 그것이 나의 길이다.',
    author: '-나폴레옹',
  },
  {
    quote:
      '먼저 핀 꽃은 먼저 진다 남보다 먼저 공을 세우려고 조급히 서둘 것이 아니다',
    author: '-채근담',
  },
  {
    quote: '자신감 있는 표정을 지으면 자신감이 생긴다',
    author: '-찰스다윈',
  },
  {
    quote:
      '네 믿음은 네 생각이 된다 . 네 생각은 네 말이 된다. 네말은 네 행동이 된다 네행동은 네 습관이된다 . 네 습관은 네 가치가 된다 . 네 가치는 네 운명이 된다',
    author: '-간디',
  },
  {
    quote: ' 고개 숙이지 마십시오. 세상을 똑바로 정면으로 바라보십시오.',
    author: '-헬렌 켈러',
  },
  {
    quote: '그대의 하루 하루를 그대의 마지막 날이라고 생각하라',
    author: '-호라티우스',
  },
  {
    quote:
      '자신의 본성이 어떤것이든 그에 충실하라 . 자신이 가진 재능의 끈을 놓아 버리지 마라. 본성이 이끄는 대로 따르면 성공할것이다',
    author: '-시드니 스미스',
  },
  {
    quote: '목표를 향하는 과정을 즐겨라',
    author: '-나',
  },
  // {
  //   quote: '',
  //   author: '-',
  // },
  // {
  //   quote: '',
  //   author: '-',
  // },
  // {
  //   quote: '',
  //   author: '-',
  // },
  // {
  //   quote: '',
  //   author: '-',
  // },
];

const quote = document.querySelector('#quote :nth-child(1)');
const author = document.querySelector('#quote :nth-child(2)');
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

// console.log(quote);
// console.log(author);

// console.log(quotes[0]);
// console.log(Math.random() * 10);

// random, 반올림round, 올림(천장)ceil, 내림(층)floor을 이용해array에서 끌어낸다
// quotes 배열의 길이를 곱해준다
// console.log(quotes[Math.floor(Math.random() * quotes.length)]);

// todaysQuote의 quote: 부분
// todaysQuote의 author: 부분

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
