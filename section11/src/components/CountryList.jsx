import CountryItem from "./countryItem";

export default function CountryList([countries]) {
  return (
    <div>
      {countries.map((country) => (
        <CountryItem key={country.code} {...country} />
      ))}
    </div>
  );
}

CountryList.defaultProps = {
  countries: [],
};
