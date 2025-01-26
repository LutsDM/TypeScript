interface Props {
    brand: string;
    gears: number;
    price: number;
    color: string;
}

export default function Bike(props:Props): JSX.Element {
    const {brand, gears, price, color} = props;
    return (
        <div style={{backgroundColor:color,color:"white"}}>
            Brand: {brand} Color: {color} Price: {price} Gears: {gears}
        </div>
    );
}