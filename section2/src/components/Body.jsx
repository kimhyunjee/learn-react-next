import "./Body.css";
import Button from "./Button";

//구조분해할당 - 또한 이렇게 함수로 만들어서 컴포넌트로 내려주면 button.jsx에서 children으로 받음
function ButtonChild() {
  return <div>BUTTON CHILD</div>;
}

export default function Body() {
  // const number = 10;
  // const string = " hello";
  // const bool = true;
  //jsx에서는 문자나 숫자값만 렌더링 할 수 있음
  // const obj = {
  //   a: 1,
  // };
  //객체는 리액트의 자식요소로써 부적절하다 고 뜸

  // const func = () => {
  //   return "func";
  // };

  // const user = {
  //   name: "이정환",
  //   isLogin: true,
  // };

  // 내려줄 props가 많으면 return 문 가독성이 떨어져서 지양함.
  // 더 간단하게 내려줄 수 있는 방법은
  const buttonProps = {
    a: 1,
    b: 2,
    c: 3,
  };
  //인데 또한 이런 숫자와 문자 말고도 <div></div>같은 태그들도 children으로 넘겨줄 수 있다

  return (
    // 1번 . jsx에서 표현 가능한 것들
    // <div>
    //   <h1>BODY</h1>
    //   <h2>{number % 2 === 0 ? "짝수" : "홀수"}</h2>
    //   <h2>{string}</h2>
    //   <h2>{bool}</h2>
    //   {/* <h2>{obj}</h2> */}
    //   <h2>{obj.a}</h2>
    //   <h2>{func()}</h2>

    // </div>
    //2번. 조건부 렌더링
    // <>
    //   {number % 2 === 0 ? (
    //     <div>{number}는 짝수입니다</div>
    //   ) : (
    //     <div>{number}는 홀수입니다</div>
    //   )}
    // </>

    //3번.style 요소
    //style={{ backgroundColor: "green", borderBottom: "5px solid blue" }}

    <>
      <div className="body">
        <h1>BODY</h1>
        <Button text={"1번 버튼"} color={"red"} {...buttonProps}>
          {/* <div>button</div> */}
          <ButtonChild />
        </Button>
        <Button text={"2번 버튼"} />
        <Button text={"3번 버튼"} />
      </div>
    </>
  );
}
