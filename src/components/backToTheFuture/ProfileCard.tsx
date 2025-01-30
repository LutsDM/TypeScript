import style from "./ProfileCard.module.css";

interface ProfileCardProps {
  avatar: string;
  fullname: string;
  birthday: string;
  occupation: string;
  hobbies: string[];
}

function ProfileCard({
  avatar,
  fullname,
  birthday,
  occupation,
  hobbies,
}: ProfileCardProps): JSX.Element {
  if (avatar && fullname) {
    return (
      <div className={style.profileCard}>
        <h2>{fullname}</h2>
        <div>
          <img src={avatar} alt="character img" />
        </div>
        <p>
          <span>Birthday:</span> {birthday}
        </p>
        <p>
          <span>Occupation:</span> {occupation}
        </p>
        <p>
          <span>Hobbies:</span> {hobbies.join(", ")}
        </p>
      </div>
    );
  }
  return <p>Not valid data!😒</p>;
}

export default ProfileCard;
