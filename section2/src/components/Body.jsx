import "./Body.css";
import { useState } from "react";

export default function Body() {
  // const [name, setName] = useState("");
  // const [gender, setGender] = useState("");
  // const [bio, setBio] = useState("");
  //위의 3가지 state 통합으로 만들어버리기
  const [state, setState] = useState({
    name: "",
    gender: "",
    bio: "",
  });

  // const onChangeName = (e) => {
  //   // setName(e.target.value);
  //   setState({ ...state, name: e.target.value });
  // };

  // const onChangeGender = (e) => {
  //   // setGender(e.target.value);
  //   setState({ ...state, gender: e.target.value });
  // };
  // const onChangeBio = (e) => {
  //   // setBio(e.target.value);
  //   setState({ ...state, bio: e.target.value });
  // };

  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value, //{} 안에 대괄호[] 를 넣는 것 : 계산된 프로퍼티 라는 js문법
    });
  };

  return (
    <div className="body">
      <div>
        <input name="name" value={state.name} onChange={onChange}></input>
        {/* {name.length}/600 */}
      </div>
      <div>
        <select name="gender" value={state.gender} onChange={onChange}>
          <option value={""}>밝히지 않음</option>
          <option value="female">여성</option>
          <option value="male">남성</option>
        </select>
      </div>
      <textarea name="bio" value={state.bio} onChange={onChange} />
    </div>
  );
}
