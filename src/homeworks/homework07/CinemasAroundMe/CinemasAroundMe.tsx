/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import CinemaCard from "./CinemaCard";
import "./cinemasAroundMe.css";

const FOURSQUARE_API_URL = "https://api.foursquare.com/v3/places/search";
const FOURSQUARE_API_KEY = "fsq3wZz4JJikl+/yRjxenF3W7+lUKkQyvX49bMJWDFvsjmY=";

// авторизация апишки по ключу для Foursquare API
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: FOURSQUARE_API_KEY,
  },
};

export default function CinemasAroundMe(): JSX.Element {
  const [city, setCity] = useState<string>("");
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);
  const [cinemas, setCinemas] = useState<any[]>([]); // Массив для хранения кинотеатров

  // функция получения текущей геолокации
  async function geolocation(): Promise<void> {
    try {
      const res = await fetch("https://get.geojs.io/v1/ip/geo.json");
      const obj = await res.json();
      const { city, latitude, longitude } = obj;
      setCity(city);
      setLatitude(latitude);
      setLongitude(longitude);
      console.log(latitude, longitude);
    } catch (error) {
      console.error("Geolocation error:", error);
    }
  }

  // функция поиска кинотеатров через Foursquare API
  async function findCinema(): Promise<void> {
    if (latitude === null || longitude === null) {
      console.error("Geolocation not available");
      return;
    }

    try {
      const res = await fetch(
        `${FOURSQUARE_API_URL}?ll=${latitude}%2C${longitude}&radius=100000&categories=10024&sort=DISTANCE`,
        options
      );
      const data = await res.json();
      if (data.results && data.results.length > 0) {
        setCinemas(data.results); // Сохраняем все найденные кинотеатры в массив
      } else {
        setCinemas([]); // Если не нашли кинотеатры, очищаем список
      }
      console.log("Foursquare API Response Data:", data);
    } catch (error) {
      console.error("Foursquare API error:", error);
    }
  }

  // Вызываем геолокацию при монтировании
  useEffect(() => {
    geolocation();
  }, []);

  // Поиск кинотеатров, когда геолокация обновляется
  useEffect(() => {
    if (latitude !== null && longitude !== null) {
      findCinema();
    }
  }, [latitude, longitude]);

  return (
    <div>
      <div className="headerCAM">
        <img src="cinema1.png" alt="cinema header" />
      </div>
      <h1 className="neonText">Cinemas Around Me</h1>
      <h2>{city}</h2>
      <button className="btnCAM" onClick={findCinema}>
      Refresh Cinemas List
      </button>
      <div className="cinemaContainer">
        {/* Отображаем все кинотеатры, если они есть */}
        {cinemas.length > 0 ? (
          cinemas.map((cinema, index) => (
            <CinemaCard
              key={index}
              name={cinema.name}
              address={cinema.location.formatted_address}
              distance={cinema.distance}
            />
          ))
        ) : (
          <p>No cinemas found nearby</p>
        )}
      </div>
    </div>
  );
}
