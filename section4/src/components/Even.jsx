import { useEffect } from "react";

export default function Even() {
  /* 
  3.언마운트 제어 / useEffect 첫 번째 인자가 새로운 함수를 반환하게 되면,
  이 함수는 useEffect의 콜백함수가 다시 호출되기 전이나 또는, useEffect를 가지고 있는 컴포넌트가 ( 여기서는 Even )언마운트 될 때 실행됨
  deps에 빈배열 추가한 이유는? 
  => 콜백함수가 실행되는 조건
  1. 언마운트 될 때
  2. 콜백함수가 다시 호출이 될 때 
  인데, 빈배열을 넣으면 mount 때 한 번만 발동되므로 2번의 다시 호출될 때의 일이 없음 = 언마운트 시에만 작동하게됨
   */
  useEffect(() => {
    return () => {
      console.log("언마운트");
    };
  }, []);

  return <div>짝수입니다</div>;
}
