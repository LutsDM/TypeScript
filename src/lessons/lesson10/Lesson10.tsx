import { useEffect, useState } from "react";
import Loader from "../../components/loader/Loader";
import CatInfo from "../../components/catInfo/CatInfo";
import MyButton from "../../components/myButton/MyButton";
import styles from "./lesson10.module.css"

interface ICatImageData {
  url: string;
}
interface ICatFactData {
  fact: string;
}

export default function Lesson10(): JSX.Element {
  const [catData, setCatData] = useState<{ img: string; fact: string }[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchCatData = async (): Promise<void> => {
    setIsLoading(true);
    const imgRes = await fetch(
      "https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=false&order=RANDOM&page=0&limit=1"
    );
    const factRes = await fetch("https://catfact.ninja/fact");

    const imgData: ICatImageData[] = await imgRes.json();
    const factData: ICatFactData = await factRes.json();

    setCatData((prevData) => [
      ...prevData,
      { img: imgData[0].url, fact: factData.fact },
    ]);

    setIsLoading(false);
  };

  const clearCatData = (): void => {
    setCatData([]);
  };

  useEffect(() => {
    fetchCatData();
  }, []);

  return (
    <div className={styles.catWrapper}>
        <div className={styles.buttonWrapper}>
      <MyButton
        func={fetchCatData}
        type="submit"
        disabled={false}
        variant={"primary"}
        text={"Get more info!"}
      />
      
      {catData.length > 0 && (
        <MyButton
        func={clearCatData}
        type="submit"
        disabled={false}
        variant={"danger"}
        text={"DELETE ALL DATA!"}
      />
      )}
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.catCardWrapper}>
          {catData.map((cat, index) => (
            <CatInfo key={index} info={cat.fact} img={cat.img} />
          ))}
        </div>
      )}
    </div>
  );
}
