import "./Body.css";
import { useState, useRef } from "react";

export default function Body() {
  const [state, setState] = useState({
    name: "",
    gender: "",
    bio: "",
  });

  //useRef 는 레퍼런스 객체를 생성해서 반환함
  //★레퍼런스 객체가 담고 있는 값은 컴포넌트가 리렌더링되어도 그대로 유지됨 / 특정 돔 요소를 참조하는 값으로 만들 때 사용
  const nameRef = useRef();

  const onSubmit = () => {
    if (state.name === "") {
      nameRef.current.focus();
      return;
    }
    alert(`${state.name}님 회원가입을 축하합니다 !`);
  };

  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value, //{} 안에 대괄호[] 를 넣는 것 : 계산된 프로퍼티 라는 js문법
    });
  };

  return (
    <div className="body">
      <div>
        <input
          ref={nameRef}
          name="name"
          value={state.name}
          onChange={onChange}
        ></input>
      </div>
      <div>
        <select name="gender" value={state.gender} onChange={onChange}>
          <option value={""}>밝히지 않음</option>
          <option value="female">여성</option>
          <option value="male">남성</option>
        </select>
      </div>
      <div>
        <textarea name="bio" value={state.bio} onChange={onChange} />
      </div>
      <div>
        <button onClick={onSubmit}>회원가입</button>
      </div>
    </div>
  );
}
