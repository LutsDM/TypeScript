
import { useState } from 'react';
import style from './Counter.module.css';

function Counter(): JSX.Element{

const [counter, setCounter] = useState<number>(0)

function handlePlus(): void {
    setCounter(counter +1)
}

function handleMinus(): void {
    setCounter(counter -1)
}

return(
    <div>
        <h1>Добавление денег</h1>
        <img className={style.image} src="https://www.zastavki.com/pictures/originals/2020Finance_Wallpapers___Money_Lot_of_euro_bills_close_up_145693_.jpg" alt="" />
        <div className={style.container}>
        <button className={style.btn} type="button" onClick={handleMinus}>Убрать деньги</button>
        <span className={style.span_counter}> ( {counter} ) EURO</span>
        <button className={style.btn} type="button" onClick={handlePlus}>Добавить деньги</button>
        </div>
    </div>
)
}
export default Counter