import Spinner from "./Spinner";
import Message from "./Message";
import styles from "./countryList.module.css";
import CountryItem from "./CountryItem";
import useCities from "../contexts/hooks/useCities";

function CountryList() {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return <Message message="Add your first city on the map" />;
  const counteris = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [
        ...arr,
        { country: city.country, id: city.id, emoji: city.emoji },
      ];
    else return arr;
  }, []);
  return (
    <ul className={styles.countryList}>
      {counteris.map((country) => (
        <CountryItem country={country} key={country.id} />
      ))}
    </ul>
  );
}

export default CountryList;
