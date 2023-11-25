import CountryItem from "./countryItem";
import style from "./CountryList.module.css";

export default function CountryList({ countries }) {
  return (
    <div className={style.container}>
      {countries.map((country) => (
        <CountryItem key={country.code} {...country} />
      ))}
    </div>
  );
}

CountryList.defaultProps = {
  countries: [],
};
