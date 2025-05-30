import logo from './logo.svg';
import './App.css';
import React, { use, useEffect, useState } from 'react';
import axios from 'axios';

//function = 컴포넌트 자체, 부품
//props = 속성, 연결

function Header(props) { //Header 컴포넌트
  // const [title, setTitle] = useState('Web1');
  // title 이 React로 바꼈으면 눌렀을때 홈으로 가게하려면
  // props로 title과 setTitle을 받으면?

  return (
    <header>
      <h1 className='title'>
        <a href='/' onClick={(event) => {
          event.preventDefault();
          props.setTitle('React'); //누르면 타이틀이 바뀌게
          props.onChangeMode(); // setMode를 'Home'으로 바꾼다
        }}>
          {props.title}
        </a>
      </h1>
    </header>
  )
}

function Nav(props) {
  const list = [
    // <li><a href='/read/1'>html</a></li>,
    // <li><a href='/read/2'>css</a></li>,
    // <li><a href='/read/3'>java</a></li>
  ]
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    list.push(
      <li key={t.id}>
        <a id={t.id} href={'/read/' + t.id} onClick={(event) => { //각 태그를 누를때마다
          event.preventDefault();
          props.onChangeMode(Number(event.target.id));

          // console.log(event.target); // a태그 그 자체가 나왔다
        }}>{t.title}</a></li>
    );
  }
  return (
    <nav>
      <ol>
        {list}
      </ol>
    </nav>
  )
}

function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      <p>{props.body}</p>
    </article>
  )
}

function Create(props) {
  return (
    <article>
      <h2>Create</h2>
      <form onSubmit={(event) => {
        event.preventDefault();
        const title = event.target.title.value;//title 값과 body 값 가져오기
        const body = event.target.body.value;
        props.onCreate(title, body);
      }}>
        <p><input type='text' name='title' placeholder='제목을 입력하세요'></input></p>
        <p><textarea name='body' placeholder='내용을 입력하세요'></textarea></p>
        <p><input type='submit' value='Create만들기'></input></p>
      </form>

    </article>
  )
}

function Update(props) {
  const [title, setTitle] = useState(props.title);
  const [body, setBody] = useState(props.body);
  return (
    <article>
      <h2>Update</h2>
      <form onSubmit={(event) => {
        event.preventDefault();
        const title = event.target.title.value;//title 값과 body 값 가져오기
        const body = event.target.body.value;
        props.onUpdate(title, body);
      }}>
        <p><input type='text' name='title' placeholder='제목을 입력하세요' value={title} onChange={(event) => {
          console.log(event.target.value);
          setTitle(event.target.value);
        }}></input></p>
        <p><textarea name='body' placeholder='내용을 입력하세요' value={body} onChange={(event) => {
          setBody(event.target.value);
        }}></textarea></p>
        <p><input type='submit' value='Updateee~'></input></p>
      </form>
    </article>
  )
}

let contextControll;
function App() { //메인 App 컴포넌트
  const [title, setTitle] = useState('Web1'); //Header의 타이틀
  const [mode, setMode] = useState('Home'); //mode값 State
  const [id, setId] = useState(null);
  const [nextId, setNextId] = useState(4); //다음 id 값
  const [topics, setTopics] = useState([ //여러개의 데이터
    { id: 1, title: 'html', body: 'html is ...' },
    { id: 2, title: 'css', body: 'css is ...' },
    { id: 3, title: 'java', body: 'java is ...' }
  ])

  let content = null;
  if (mode === 'Home') {
    content = <Article title="Article's title" body="Article's body"></Article>;

  } else if (mode === 'Read') {
    let title, body;
    //topics의 각 타이틀과 바디가 나와야한다
    for (let i = 0; i < topics.length; i++) {
      if (topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }

    content = <Article title={title} body={body}></Article>;
    contextControll = <>
      <li><a href={'/Update/' + id} onClick={function (event) {
        event.preventDefault();
        setMode('Update');
      }}>Updateeee</a></li>
      <li><input type='button' value='Delete' onClick={()=>{
        const newTopics = [];
        for(let i =0; i< topics.length; i++){
          if(topics[i].id !== id){
            newTopics.push(topics[i]);
          }
        }
        setTopics(newTopics);
        setMode('Home');
      }}></input></li>
    </>;
  }

  if (mode === 'Create') {
    content = <Create setMode={setMode} onCreate={(_title, _body) => {
      const newTopic = { id: nextId, title: _title, body: _body };
      const newTopics = [...topics] //복제본으로 넣어준다
      newTopics.push(newTopic); // 을 수정하고 추가한다
      setTopics(newTopics);

      setMode('Read');
      setId(nextId);
      setNextId(nextId + 1);
    }}></Create>
  }

  if (mode === 'Update') {
    let title, body = null;
    for (let i = 0; i < topics.length; i++) {
      if (topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Update title={title} body={body} onUpdate={(title, body) => {
      const newTopics = [...topics];
      const updatedTopic = { id: id, title: title, body: body }
      for (let i = 0; i < newTopics.length; i++) {
        if (newTopics[i].id === id) {
          newTopics[i] = updatedTopic;
          break;
        }
      }
      setTopics(newTopics);
      setMode('Read');

    }}></Update>
  }

  return (
    <div>
      <Header title={title} setTitle={setTitle} onChangeMode={function () {
        console.log('header123');
        setMode('Home');
        setTitle('React');
      }}></Header>

      <Nav topics={topics} onChangeMode={(_id) => {
        console.log('아이디 값: ' + _id);
        setMode('Read');
        setId(_id);
      }}></Nav>

      {content}

      <li><a href='/Create' onClick={(event) => {
        event.preventDefault();
        setMode('Create');
      }}>Create</a></li>
      {contextControll}

    </div>
  );
}

export default App;
