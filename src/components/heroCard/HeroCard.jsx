/* eslint-disable react/prop-types */
import "./heroCard.css";

export default function HeroCard({ id, name, age, isDark, weapons, image }) {
  return (
    <div className="heroCardNew" key={id}>
      <p>{name}</p>
      <div
        className={`heroCardImgWrapperNew ${
          isDark ? "heroCardDarkNew" : "heroCardLightNew"
        }`}
      >
        <img src={image} alt="hero image" />
      </div>
      <p>Age: {age}</p>
      <p>{isDark ? "Villan 🔥" : "Hero 🦾"}</p>
      <p>Weapons: {weapons.map((weapon) => weapon).join(", ")}</p>
    </div>
  );
}
