import { useState } from "react";
import "./day.css";

export default function Day() {
  const [isDay, setDay] = useState(false);

  const dayNight = () => {
    setDay((prev) => !prev);
  };

  return (
    <div className="dayNight">
      <div className={isDay ? "day" : "night"}>
        <div className="container">
          <h1>{isDay ? "День 🌞" : "Ночь🌘"}</h1>
          <button onClick={dayNight}>On/Off</button>
        </div>
      </div>
    </div>
  );
}
