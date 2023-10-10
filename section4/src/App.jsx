import { useState, useEffect, useRef } from "react";
import "./App.css";
import Controller from "./components/Controller";
import Viewer from "./components/Viewer";
import Even from "./components/Even";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const onChangeText = (e) => {
    setText(e.target.value);
  };

  /*
useEffect 로 라이프사이클 제어하기
1. 마운트
2. 업데이트 : deps 삭제
3. 언마운트
*/

  // useEffect(() => {
  //   console.log(` 텍스트 : ${text}`);
  // }, [text]);

  // useEffect(() => {
  //   console.log(`카운트 : ${count} `);
  // }, [count]);

  // 2. 업데이트 제어
  const isMountRef = useRef(false);

  //useEffect가 새로고침 되었을 때 (마운트) 실행되지 않도록하는 조건문
  useEffect(() => {
    if (!isMountRef.current) {
      isMountRef.current = true;
      return;
    }
    console.log("업데이트");
  });

  // 1.마운트 제어 : 두번째 인자로 빈 배열 주기 []
  useEffect(() => {
    console.log("마운트");
  }, []);

  const onClickButton = (value) => {
    setCount(count + value);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input value={text} onChange={onChangeText} />
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 && <Even />}
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
