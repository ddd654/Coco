import logo from './logo.svg';
import './App.css';
import React, { use, useEffect, useState } from 'react';
import axios from 'axios';


// 갑자기 느낀건데 이걸 배워야하는게 납득이 안돼
// 이걸 왜 배워야 하는건지 직접 만들면서 느껴야겠어,

//function = 컴포넌트, 부품
//props = 속성 


function Header(props) { //Header 컴포넌트 = header 태그
  console.log(props);
  return (
    <header>
      <h1>
        <a href='/' onClick={(event) => {
          console.log(event);
          event.preventDefault(); //기본 a 태그 기능 막기
          props.onChangeMode(); //header의 props event
        }}>
          {props.title}
        </a>
      </h1>
    </header>
  )
}

function Nav(props) { //Nav 컴포넌트
  const lis = [] //배열 공간
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(
      <li key={t.id}>
        <a id={t.id} href={'/read/' + t.id} onClick={(event) => {
          event.preventDefault();
          props.onChangeMode(event.target.id);
          console.log('이벤트 타겟 ' + event.target);
          console.log('이벤트 타겟 + 아이디 ' + event.target.id);
        }}>
          {t.title}
        </a>
      </li>
    );
  }

  return (
    <nav>
      <ol>
        {lis}
      </ol>
    </nav>
  )
}

function Section(props) { //Section 컴포넌트
  return (
    <section>
      <h2>Apple 대신 {props.title}</h2>
      {props.body}
    </section>
  )
}

function App() { //메인 App
  // const _mode = useState('Welcome');
  // const mode = _mode[0];
  // const setMode = _mode[1];
  const[mode, setMode]  = useState('Welcome');
  console.log('모드여', mode);
  const topics = [
    { id: 1, title: "타이틀1", body: '바디1' },
    { id: 2, title: "타이틀2", body: '바디2' },
    { id: 3, title: "타이틀3", body: '바디3' }
  ]

  let content = null;;
  if (mode == 'Welcome') {
    content = <Section title="Section의 타이틀" body="Section의 바디"></Section>
  } else if( mode==='Read'){
    content = <Section title="Read~" body="Read"></Section>
  }
  return (
    <div>
      <Header title="react?" onChangeMode={() => {
        alert('Header 어려운게 당연한건가')
        mode = 'Welcome';
      }}></Header>
      <Nav topics={topics} onChangeMode={(id) => {
        alert('id 값 ' + id);
        mode='Read';
      }}></Nav>
      {content}
    </div >
  );
}

export default App;
