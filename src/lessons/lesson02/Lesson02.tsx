import MyButton from "../../components/myButton/MyButton";

interface Library {
  library: string;
  developer?: string;
  logo?: string;
}

function Lesson02(): JSX.Element {
  const element: JSX.Element = <h4>Это JSX элемент из переменной element!</h4>;
  const text: string = "Это строка из переменной text..";

  const react: Library = {
    library: "react",
    developer: "Meta",
    logo: "https://cdn.pixabay.com/photo/2022/01/18/08/43/meta-6946620_960_720.jpg",
  };

  const angular: Library = {
    library: "Angular",
    developer: "Google",
  };

  function showDeveloper(obj: Library): string {
    if (obj.developer) {
      return `Developer of ${obj.library} is ${obj.developer}!`;
    }
    return "Not valid data!😒";
  }

  const isLoggedIn: boolean = true;

  return (
    <div>
      <h2>Lesson 02: JSX</h2>
      <p>
        В JSX мы можем пользоваться динамическими данными, которые приходят из
        тела функции react компонента или других файлов
      </p>
      {element}
      <p>Здесь будет строка: {text}</p>
      <p>Это вычесление случилось в JSX: {40 * 20}</p>
      <p>{showDeveloper(react)}</p>
      <p>{showDeveloper(angular)}</p>
      {isLoggedIn ? (
        <img width={"250px"} src={react.logo} alt="React" />
      ) : (
        <h4>To see image you need to authorize!</h4>
      )}
      <div>
        <MyButton />
        <MyButton />
        <MyButton />
      </div>
    </div>
  );
}

export default Lesson02;
