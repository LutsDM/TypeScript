/* eslint-disable react-hooks/exhaustive-deps */
// import styles from './MarsShotsMain.module.css'

import { useEffect, useState } from "react";
import MarsCard from "./marsCard/MarsCard";
import Loader from "../loader/Loader";
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

export default function MarsShotsMain(): JSX.Element {
  const [marsDataCuriosity, setMarsDataCuriosity] = useState<MarsData[]>([]);
  // const [marsDataOpportunity, setMarsDataOpportunity] = useState<MarsData[]>(
  //   []
  // );
  // const [marsDataSpirit, setMarsDataSpirit] = useState<MarsData[]>([]);
  const [totalPhotosCuriosity, setTotalPhotosCuriosity] = useState<number>(0)
  const [isLoading, setIsLoading] = useState<boolean>(true)

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
    const data: MarsData[] = await res.json();
    setMarsDataCuriosity(data);
    setIsLoading(false);
    console.log(data);
  };

  // const fetchMarsSpirit = async (apiKey: string): Promise<void> => {
  //   const res = await fetch(
  //     `https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?sol=500&page=2&api_key=${apiKey}`
  //   );
  //   const data: MarsData[] = await res.json();
  //   setMarsDataSpirit(data);
  //   console.log(data);
  // };

  // const fetchMarsOpportunity = async (apiKey: string): Promise<void> => {
  //   const res = await fetch(
  //     `https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?sol=2000&page=2&api_key=${apiKey}`
  //   );
  //   const data: MarsData[] = await res.json();
  //   setMarsDataOpportunity(data);
  //   console.log(data);
  // };

  async function fetchTotalPhotos(apiKey: string) {
    let page = 1;
    let totalPhotos = 0;

    while (true) {
      const res = await fetch(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?page=${page}&api_key=${apiKey}`
      );
      const data = await res.json();

      if (data.photos.length === 0) break;

      totalPhotos += data.photos.length;
      page++;
    }

    setTotalPhotosCuriosity(totalPhotos);

    console.log("Total photos:", totalPhotos);
  }

  useEffect(() => {
    fetchMarsCuriosity(apiKey);
    // fetchMarsOpportunity(apiKey);
    // fetchMarsSpirit(apiKey);
    fetchTotalPhotos(apiKey);
  }, []);

  return (
    <div>
      <h1>Mars Shots</h1>
      {isLoading ? (<Loader/>) : ( <MarsCard
        roverName="curiosity"
        landingDate={marsDataCuriosity[0].rover.landing_date}
        totalPhotos={totalPhotosCuriosity} status={marsDataCuriosity[0].rover.status}
      />)}
           
    </div>
  );
}
