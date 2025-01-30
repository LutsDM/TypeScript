
import "./heroCard.css";
interface HeroCard{
  id:number;
  name:string;
  age:number;
  isDark:boolean;
  weapons:string[];
  image:string

}

export default function HeroCard({ id, name, age, isDark, weapons, image }:HeroCard) {
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
