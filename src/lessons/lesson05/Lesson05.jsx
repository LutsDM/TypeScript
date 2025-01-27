import { fellowship } from "./fellowship";
import "./lesson05.css";

export default function Lesson05() {
  console.log(fellowship);
  return (
    <div>
      <h2>React map()components</h2>
      <div>
        {fellowship.map((hero) => (
          <div className="heroCard" key={hero.id}>
            <p>{hero.name}</p>
            <div className={`heroCardImgWrapper ${hero.isDark ? 'heroCardDark' : 'heroCardLight'}`}>
              <img src={hero.image} alt="hero image" />
            </div>
            <p>Age: {hero.age}</p>
            <p>{hero.isDark ? "Villan 🔥" : "Hero 🦾"}</p>
            <p>Weapons: {hero.weapons.map((weapon, index) => index !== weapon.length - 1 ? weapon + ", " : weapon)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
