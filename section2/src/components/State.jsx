import { useState } from "react";

function Lightbulb({ light }) {
  // console.log("lightbulb", light);
  return (
    <>
      {light === "ON" ? (
        <div style={{ backgroundColor: "orange" }}>ON</div>
      ) : (
        <div style={{ backgroundColor: "gray" }}>OFF</div>
      )}
    </>
  );
}

function StaticLightbulb() {
  return <div style={{ backgroundColor: "gray" }}>OFF</div>;
}

export default function State() {
  /* const [어쩌고, setㅇ ㅓ쩌고] = useState("초기값") => js의 배열의 구조분해할당
  [] 첫번째 인자는 state값, 두 번째는 state 상태변화 함수 / 그래서 첫번째거는 파란색 두번째거는 함수라 노란색
  */
  const [light, setLight] = useState("OFF");

  return (
    <div className="body">
      <Lightbulb light={light} />
      <StaticLightbulb />
      <button
        onClick={() => {
          setLight("ON");
        }}
      >
        켜기
      </button>
      <button
        onClick={() => {
          setLight("OFF");
        }}
      >
        끄기
      </button>
    </div>
  );
}
