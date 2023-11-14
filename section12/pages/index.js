import { useEffect } from "react";

export default function Home({ name }) {
  console.log("HOME");

  // 브라우저에만 콘솔 찍고 싶을 때  useEffect 사용 !
  useEffect(() => {
    console.log("HOME MOUNT");
  }, []);

  return <div>{name}</div>;
}

export const getServerSideProps = async () => {
  /*
  SSR을 위해 서버측에서 페이지 컴포넌트(위의 Home컴포) 에게 전달할 데이터를 설정하는 함수
  이 컴포넌트는 반드시 객체를 반환해야 하며 안에 props라는 프로퍼티를 가지고 있어야 한다
  */

  return {
    props: {
      name: "KOREA",
    },
  };
};
