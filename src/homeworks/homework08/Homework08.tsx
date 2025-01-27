import { useEffect, useState } from "react"


export default function Homework08() {
    const [fox, setFox] = useState<string>("");

    useEffect(() => {
        fetch('https://randomfox.ca/floof/')
        .then(res => res.json())
        .then(data =>setFox(data.image))
    },[]); 



  return (
    <div>
        <img src={fox} alt="fox foto" />
    </div>
  )
}
