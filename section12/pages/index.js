import { fetchCountries } from "@/api";
import { useEffect } from "react";

export default function Home({ countries }) {
  return (
    <div>
      {countries.map((country) => (
        <div key={country.code}>{country.commonName}</div>
      ))}
    </div>
  );
}

export const getStaticProps = async () => {
  /*
  SSR을 위해 서버측에서 페이지 컴포넌트(위의 Home컴포) 에게 전달할 데이터를 설정하는 함수
  이 컴포넌트는 반드시 객체를 반환해야 하며 안에 props라는 프로퍼티를 가지고 있어야 한다
  */

  const countries = await fetchCountries();
  console.log("countries 데이터 불러옴");
  return {
    props: {
      countries,
    },
  };
};
