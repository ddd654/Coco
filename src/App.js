import logo from './logo.svg';
import './App.css';
import React, { use, useEffect, useState } from 'react';
import axios from 'axios';

//function = 컴포넌트 자체, 부품
//props = 속성, 연결

function Header(props) { //Header 컴포넌트
  console.log("헤더의 프롭스와 타이틀", props, '', props.title);
  console.log();
  return (
    <header>
      <h1>
        <a className='changeTitle' href='/' onClick={(event) => {
          event.preventDefault();
          props.onChangeMode();
        }}>
          {props.title}
        </a>
      </h1>
    </header>
  );
}

function Nav(props) { //Nav 컴포넌트
  const list = []

  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    list.push(
      <li key={t.id}>
        <a id={t.id} href={'/Read/' + t.id} onClick={event => {
          event.preventDefault();
          props.onChangeMode(Number(event.target.id));
        }}>
          {t.title}
        </a>
      </li>)
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
  const [mode, setMode] = useState('Welcome');
  const [id, setId] = useState(null);
  const topics = [ // 아 data (임시)
    { id: 1, title: 'html', body: 'html\'s body value' },
    { id: 2, title: 'css', body: 'css\'s body value' },
    { id: 3, title: 'java title', body: 'java\'s \\ body value' }
  ]
  console.log('토픽스가 뭐야', topics);

  let content = null;
  if (mode === 'Welcome') {
    content = <Article title='apple' body='맛있는 사과'></Article>;
  } else if (mode === 'Read') {
    let title, body = null;
    for (let i = 0; i < topics.length; i++) {
      console.log('아이디~' + topics[i].id, id);
      if (topics[i].id == id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body}></Article>;
  }

  return (
    <div>
      <Header title='React' onChangeMode={function () {
        alert('인생이란 어떻게');
        setMode('Welcome');
      }}></Header>
      <Nav topics={topics} onChangeMode={(_id) => {
        alert('아이디 값: ' + _id);
        setMode('Read');
        setId(_id);
      }}></Nav>
      {content}
    </div>
  );
}

export default App;
