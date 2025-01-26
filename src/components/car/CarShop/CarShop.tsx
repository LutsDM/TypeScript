import Bike from "../../bike/Bike";
import Car from "../Car";
import img from './img/tesla.webp'


export default function CarShop(): JSX.Element {
  return (
    <div>
      <h1>Car Shop</h1>
      <h2>Cars</h2>
      <Car brand="mercedes" color="black" />
      <Car brand="Opel" color="Yellow" />
      <Car brand="Tesla" color="red" />
      <Car brand="Lada" color="green" />
      <Car brand="Audi" color="pink" />
      <h1>Первый способ загрузить изображение через импорт</h1>
      <img src={img} alt="" />
      <img src={img} alt="" />
      <img src={img} alt="" />
      <h1>Второй способ загрузить изображение через импорт</h1>
      <img src="car22.jpg" alt="" />
      <img src="car22.jpg" alt="" />
      <img src="car22.jpg" alt="" />
      <Bike brand="BMW" color="red" gears={5} price={5000} />
      <Bike brand="Harley-Davidson" color="black" gears={6} price={15000} />
      <Bike brand="Yamaha" color="blue" gears={5} price={8000} />
      <Bike brand="Kawasaki" color="green" gears={7} price={12000} />
    </div>
  );
}
