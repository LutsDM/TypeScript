// import styles from "./marsCard.css";


interface IMarsCardProps {
  roverName: "curiosity" | "opportunity" | "spirit";
  landingDate: string;
  totalPhotos: number;
  status: string;
}

export default function MarsCard({
  roverName,
  landingDate,
  totalPhotos,
  status,
}: IMarsCardProps): JSX.Element {
  return (
    <div>
      <div>
        <h1> {roverName}</h1>
        <h3>Arrived on Mars: {landingDate} </h3>
        <h3>Total photos: {totalPhotos} </h3>
        <h3>Mission status: {status} </h3>
      </div>
    </div>
  );
}
