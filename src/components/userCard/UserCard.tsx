import './userCard.css'

interface UserCard {
  name:string;
  age:number;
  hobby?:string;
}

function UserCard({name, age, hobby}:UserCard) {
  return (
    <div className='userCard'>
        <h4>Name: {name} </h4>
        <p>Age: {age} </p>
        {hobby && (<p>Hobby: {hobby} </p>)}
        {hobby ? (<p>Hobby: {hobby} </p>) : (<p>Hobby: No hobby</p>)}
    </div>
  );
}

export default UserCard;