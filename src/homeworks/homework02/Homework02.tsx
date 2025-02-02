import ProfileCard from "../../components/backToTheFuture/ProfileCard";
import style from "./Homework02.module.css";

function Homework02() {
  const emmettBroun = {
    avatar:
      "https://static.wikitide.net/greatcharacterswiki/thumb/4/4f/Doc_-_BackTTFuture_067Pyxurz.jpg/1200px-Doc_-_BackTTFuture_067Pyxurz.jpg",
    fullname: "Emmett Brown",
    birthday: "1920",
    occupation: "Scientist",
    hobbies: ["inventing", "time travel", "clocks"],
  };

  const martyMcFly = {
    avatar:
      "https://cdn.moviepilot.de/files/fc00f3394c6353892df9d998ef89dc660dd4c21b0b6d62238eea7f110043/fill/1200/576/marty.jpg",
    fullname: "Marty McFly",
    birthday: "1968",
    occupation: "Musician",
    hobbies: ["guitar", "skateboarding", "time travel"],
  };

  const biffTannen = {
    avatar:
      "https://media.diariouno.com.ar/p/bb8666d3153d520b7759a4524577d91d/adjuntos/298/imagenes/009/232/0009232711/1200x0/smart/volver-al-futurojpg.jpg",
    fullname: "Biff Tannen",
    birthday: "1958",
    occupation: "Businessman",
    hobbies: ["bullying", "gambling", "cars"],
  };

  const einstein = {
    avatar:
      "https://moviepaws.com/wp-content/uploads/2015/10/luhad-einstein.jpg",
    fullname: "einstein",
    birthday: "1985",
    occupation: "Dog",
    hobbies: ["time travel", "sleeping", "eating"],
  };

  return (
    <div className={style.Homework02}>
      <h2 className={style.h2_title}>Back to The Future</h2>
      <div className={style.gridContainer}>
        <ProfileCard {...emmettBroun} />
        <ProfileCard {...martyMcFly} />
        <ProfileCard {...biffTannen} />
        <ProfileCard {...einstein} />
      </div>
    </div>
  );
}

export default Homework02;
