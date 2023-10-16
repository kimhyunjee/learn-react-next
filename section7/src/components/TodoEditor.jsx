/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import "./TodoEditor.css";

export default function TodoEditor({ onCreate }) {
  const [content, setContent] = useState("");
  const inputRef = useRef();

  const onChangeContent = (e) => {
    console.log(e.target.value);
    setContent(e.target.value);
  };

  const onClick = () => {
    if (content === "") {
      inputRef.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onclick();
    }
  };

  return (
    <div className="TodoEditor">
      <input
        ref={inputRef}
        value={content}
        onChange={onChangeContent}
        onKeyDown={onKeyDown}
        placeholder="새로운 Todo ..."
      />
      <button onClick={onClick}>추가</button>
    </div>
  );
}
