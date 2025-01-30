import reactImage from '../../assets/react.svg';

function Lesson01() {
  return (
    <div>
      <h1>Lesson 01: Hello React</h1>
      <p>First steps 😘</p>
      <p>React — это JavaScript-библиотека для разработки пользовательского интерфейса.
      React используют для создания одностраничный и многостраничных приложений, разработки крупных сайтов.</p>
      <img src={reactImage} alt="React" />
    </div>
  );
}

export default Lesson01;
