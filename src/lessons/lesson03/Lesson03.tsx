import MyButton from "../../components/myButton/MyButton"; 
import UserCard from "../../components/userCard/UserCard";

import "./lesson03.css";

function Lesson03() {


  // функции для передачи в кнопку через props
  const handleClick = () => {
    console.log('Click!')
  }

  const handleSubmit = () => {
    alert('Submit!')
  }

  return (
    <div>
      <h2>React Props 👨‍👩‍👧</h2>
      {/* Вызов компонентов-карточек с передачей props */}
      <p>Вызов компонентов-карточек с передачей props:</p>
      <UserCard name={'Peter'} age={35} hobby={'hiking'} />
      <UserCard name={'Rosa'} age={40} hobby={'diving'} />
      <UserCard name={'Anton'} age={28} />
      <p>Добавили props для кнопки:</p>
      <MyButton func={handleClick} text={'Click me!'} type={'button'}/>
      <MyButton func={handleSubmit} text={'Submit'} type={'submit'}/>
      {/* пример передачи небольшой функции внутри тега вызова компонента без прописанного заранее обработчика */}
      <MyButton func={() => alert('🙅‍♂️ No Handle!')} text={'No handle!'} type={'submit'}/>

    </div>
  );
}

export default Lesson03;