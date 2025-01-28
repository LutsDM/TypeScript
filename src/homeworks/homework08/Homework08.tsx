import { useEffect, useState } from "react";
import MyButton from "../../components/myButton/MyButton";
import "./homework08.css";
import Loader from "../../components/loader/Loader";

//типизация данных с сервера
interface IFoxData {
  image: string;
  link: string;
}

export default function Homework08() {
  const [fox, setFoxImg] = useState<string>("");

  const fetchFox = async (): Promise<void> => {
    const res = await fetch("https://randomfox.ca/floof/");
    const data: IFoxData = await res.json();
    setFoxImg(data.image);
  };

  useEffect(() => {
    fetchFox();
  }, []);

  return (
    <div>
    <div className="fox-wrapper">
      <img src={fox} alt="" />
    </div>
    <MyButton func={fetchFox} text="get new fox" />
    <Loader/>
  </div>
  );
}
