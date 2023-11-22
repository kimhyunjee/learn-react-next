/*
파일명[...code]는 브라우저 주소창에 country/KOR/219328139273 등 코드번호 뒤 어떤 내용이 들어와도 이 파일이 대응할 수 있게 하는 것
[[...code]] 대괄호를 두 번 감싸주게 되면 옵셔널하게되어  /country 만 해도 이 파일이 대응하게 됨
*/

import { useRouter } from "next/router";

export default function Country(country) {
  const router = useRouter();
  const { code } = router.query;

  if (router.isFallback) {
    return <div> Loading ...</div>;
  }

  if (!country) {
    return <div>존재하지 않는 국가입니다</div>;
  }

  return (
    <div>
      {country.commonName}
      {country.officialName}
    </div>
  );
}

Country.Layout = SubLayout;

export const getStaticPaths = async () => {
  return {
    paths: [{ params: { code: "ABW" } }, { params: { code: "KOR" } }],
    fallback: "blocking",
  };
};

const getStaticProps = async () => {
  const { code } = context.params;

  let country = null;
  if (code) {
    country = await fetchCountry(code);
  }

  return {
    props: {
      country,
    },
  };
};
