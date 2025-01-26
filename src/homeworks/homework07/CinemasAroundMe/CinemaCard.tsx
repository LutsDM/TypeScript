/* eslint-disable @typescript-eslint/no-explicit-any */
interface CinemaCardProps {
  name: string;
  address: string;
  distance: any;
}

export default function CinemaCard({
  name,
  address,
  distance,
}: CinemaCardProps) {
  const distanceInKm = (distance / 1000).toFixed(2); // Переводим в километры и округляем до двух знаков

  return (
    <div>
      <h1>
        <span style={{ color: "#40E0D0" }}></span> {name}
      </h1>
      <h2>
        <span style={{ color: "#40E0D0" }}>Address:</span> {address}
      </h2>
      <h3>
        <span style={{ color: "#40E0D0" }}>Distance:</span> {distanceInKm} km
      </h3>{" "}
      {/* Выводим расстояние в километрах */}
      🍿🍿🍿
    </div>
  );
}
