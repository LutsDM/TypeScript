/* eslint-disable react-hooks/exhaustive-deps */
// import styles from './MarsShotsMain.module.css'

import { useEffect, useState } from "react";
import Loader from "../../../loader/Loader";
// import MarsCard from "./marsCard/MarsCard";

export interface MarsData {
  id: number;
  camera: {
    full_name: string;
  };
  img_src: string;
  earth_date: string;
  rover: {
    name: string;
    landing_date: string;
    status: string;
  };
}

const apiKey = "pc9gIHLd2OhSF4HrfWD6VZbhkrpPN6N9YtJK95Ry";

export default function MarsShotsPage(): JSX.Element {
  const [marsDataCuriosity, setMarsDataCuriosity] = useState<MarsData[]>([]);
  const [marsDataOpportunity, setMarsDataOpportunity] = useState<MarsData[]>(
    []
  );
  const [marsDataSpirit, setMarsDataSpirit] = useState<MarsData[]>([]);

  const [isLoading, setIsLoading] = useState<boolean>(true);

  // const [roverName, setRoverName] = useState<string>("");
  // const [earthDate, setEarthDate] = useState<string>("");

  // const fetchMars = async (roverName:string, earthDate:string, apiKey:string): Promise<void> => {
  //   const res = await fetch (`$https://api.nasa.gov/mars-photos/api/v1/rovers/${roverName}/photos?earth_date=${earthDate}&api_key=${apiKey}`);
  //   const data = await res.json();
  //   setMarsData(data)
  // }

  const fetchMarsCuriosity = async (apiKey: string): Promise<void> => {
    setIsLoading(true);

    const res = await fetch(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=${apiKey}`
    );
    const data = await res.json();
    setMarsDataCuriosity(data.photos || []);
    console.log(data);
    setIsLoading(false);
  };

  const fetchMarsSpirit = async (apiKey: string): Promise<void> => {
    setIsLoading(true);
    const res = await fetch(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?sol=500&page=2&api_key=${apiKey}`
    );
    const data = await res.json();
    setMarsDataSpirit(data.photos || []);
    console.log(data);
  };

  const fetchMarsOpportunity = async (apiKey: string): Promise<void> => {
    setIsLoading(true);
    const res = await fetch(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?sol=2000&page=2&api_key=${apiKey}`
    );
    const data = await res.json();
    setMarsDataOpportunity(data.photos || []);
    console.log(data);
  };

  useEffect(() => {
    fetchMarsCuriosity(apiKey);
    fetchMarsOpportunity(apiKey);
    fetchMarsSpirit(apiKey);
  }, []);

  return (
    <div>
      <h1>Mars Shots</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <div>
            <h1> {marsDataCuriosity[0].rover.name}</h1>
            <h3>Arrived on Mars: {marsDataCuriosity[0].rover.landing_date} </h3>
            <h3>Mission status: {marsDataCuriosity[0].rover.status} </h3>
          </div>
          <div>
            <h1> {marsDataOpportunity[0].rover.name}</h1>
            <h3>
              Arrived on Mars: {marsDataOpportunity[0].rover.landing_date}{" "}
            </h3>
            <h3>Mission status: {marsDataOpportunity[0].rover.status} </h3>
          </div>
          <div>
            <h1> {marsDataSpirit[0].rover.name}</h1>
            <h3>Arrived on Mars: {marsDataSpirit[0].rover.landing_date} </h3>
            <h3>Mission status: {marsDataSpirit[0].rover.status} </h3>
          </div>
        </div>
      )}
    </div>
  );
}
