import './myButton.css'
// пример отдельного компонента кнопки
// экспорт по умолчанию можно писать как в конце так и в начале объявления функции

interface IMyButtonProps {
  // ограничение на конкретные значения
  type?: 'button' | 'submit' | 'reset'
  text?: string
  // типизация функции в объекте по ключу
  // после => указываем возвращенное значение
  func?: () => void
}

// в props мы можем передавать значение по-умолчанию в случае если не передали props
function MyButton({type = 'submit', text = 'click!', func = () => {}}: IMyButtonProps) {
  return <button type={type} onClick={func} className="myButton">{text}</button>;
}

export default MyButton;

// * компонент button должен принимать props: text - с текстом кнопки, func - с функцией которая сработает по нажатию на кнопку

// для того чтобы функция отработала на кнопке присвойте ее на аттрибут onClick внутри кнопки
// <button onClick={...}>Click me!</button>
// в качестве теста может функции могут выводить в консоль разные данные

// вызовите кнопку два раза внутри Lesson03.jsx с разными данными
