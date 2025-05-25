import logo from './logo.svg';
import './App.css';
import React, { use, useEffect, useState } from 'react';
import axios from 'axios';

// 갑자기 느낀건데 납득이 안돼
// 직접 만들면서 느껴야겠어

//function = 컴포넌트 자체, 부품
//props = 속성, 연결

function Header(props) { //Header 컴포넌트
  console.log("헤더의 프롭스와 타이틀", props, '', props.title);

  return (
    <header>
      <h1>
        <a href='/' onClick={(event) => {
          event.preventDefault();
          props.onChangeMode();
        }}>
          Web
        </a>
      </h1>
    </header>
  );
}

function Nav(props) { //Nav 컴포넌트
  const list = [
  ]
  console.log('프롭스가 뭐야', props);

  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i]; //topics의 배열 및 객체
    list.push(
      <li key={t.id}>
        <a href={'/read/' + t.id}>
          {t.title}
        </a>
      </li>
    )
  }
  return (
    <nav>
      <ol>
        {list}
      </ol>
    </nav>
  )
}

function Article(props) { //Article 컴포넌트
  return (
    <article>
      <h3>{props.title}</h3>
      <p>{props.body}</p>
    </article>
  )
}

function App() { //메인 App 컴포넌트
  const mode = 'Welcome';
  const topics = [ // 아 이게 data (임시)
    { id: 1, title: 'html', body: 'html\'s body value' },
    { id: 2, title: 'css', body: 'css\'s body value' },
    { id: 3, title: 'java title', body: 'java\'s \\ body value' }
  ]
  console.log('토픽스가 뭐야', topics);

  let content = null;
  if (mode === 'Welcome') {
    content = <Article title='theory - updated version' body='life is boring and bored'></Article>
  } else if (mode === 'Read') {
    content = <Article title='Read' body='Read this body'></Article>
  }

  return (
    <div>
      <Header title='React' onChangeMode={function () {
        alert('인생이란 어떻게다');
      }}></Header>
      <Nav topics={topics}></Nav>
      {content}
    </div>
  );
}

export default App;
