import { useReducer, useState } from "react";

//외부에 함수 만들어주기 가능
function reducer(state, action) {
  /*
() 안에 첫 번째 인수는 현재의state값과 , 두번째에는 return문 안에서 전달한 객체가
action이라는 이름으로 전달됨
*/

  if (action.type === "DECREASE") {
    return state - action.data;
  } else if (action.type === "INCREASE") {
    return state + action.data;
  }
}

export default function B() {
  /*
  useReducer두 번째 인수로 전달한 값이 초기값이 됨
  배열의 첫 번째 인수는 useState와 동일( state의 값) 두 번째에는 함수가 저장됨 ( 트리거 역할 )
  dispatch함수를 호출하면 count state의 값이 변경된다는 것 /
  useState 상태변화 함수와 다른 점은 상태 변화를 유발하기만 할 뿐 직접적으로 처리하진x
  상태변화를 처리하는 건 위의 reducer함수가 처리함
  */
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <h4>{count}</h4>
      <div>
        <button
          onClick={() => {
            dispatch({
              //보통 객체로 전달 ( 액션객체라고 부름 )
              type: "INCREASE",
              data: 1,
            });
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            dispatch({
              type: "DECREASE",
              data: 1,
            });
          }}
        >
          -
        </button>
      </div>
    </>
  );
}
