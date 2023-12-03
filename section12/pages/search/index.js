import { fetchSearchResults } from "@/api";
import Searchbar from "@/components/Searchbar";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Search() {
  const router = useRouter();
  const { q } = router.query;

  const [countries, setCountries] = useState([]);

  const setData = async () => {
    const data = await fetchSearchResults(q);
    setCountries(data);
  };

  useEffect(() => {
    if (q) {
      setData();
    }
  }, [q]);

  return (
    <div>
      <Searchbar />
    </div>
  );
}

Search.Layout = SubLayout;
