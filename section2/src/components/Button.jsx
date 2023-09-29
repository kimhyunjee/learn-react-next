import "./Button.css";

export default function Button(props, color, text, children) {
  // console.log(props);

  //2번. 구조분해할당
  // const { color, text } = props;
  //3번. 매개변수를 props 말고 {color, text} 로 바로 받아올 수도 있음 그럼 구조분해할당 안 쓰고 바로 color,text 사용가능

  //1번. props.color 혹은 props.text로 써야하지만 구조분해할당으로  color와 text만 써도 됨
  // 왜냐면 props는 객체로 오기 때문에

  const onClick = (e) => {
    alert("button clicked");
    console.log(e);
  };

  return (
    <button
      style={{ backgroundColor: color }}
      className="button"
      onClick={onClick}
    >
      {/* {text} */}
      {children}
    </button>
  );
}
