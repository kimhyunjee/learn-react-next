import { fetchSearchResults } from "@/api";

export default function Search(countries) {
  return (
    <div>
      {countries.map((country) => (
        <div key={countries.code}>{countries.commonName}</div>
      ))}
    </div>
  );
}

Search.Layout = SubLayout;

const getServerSideProps = async () => {
  const { q } = context.query;

  let countries = [];
  if (q) {
    countries = await fetchSearchResults(q);
  }

  return {
    props: { countries },
  };
};
