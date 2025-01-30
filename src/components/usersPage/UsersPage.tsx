import { useEffect, useState } from "react";
import styles from "./usersPage.module.css";
// Необходимо отрисовать ненумерованный список
//  с лист-айтамами с контентом  внутри:
// Ник: {юзернейм}
// Имя,фамилия: {имя} {фамилия}
// Телефон: {номер}
//  E-mail: {почта}
//  Zip-code: {почтовый индекс}

// https://fakestoreapi.com/users

interface Address {
  city: string;
  street: string;
  number: number;
  zipcode: string;
  geolocation: {
    lat: string;
    long: string;
  };
}

interface User {
  id: number;
  username: string;
  name: {
    firstname: string;
    lastname: string;
  };
  phone: string;
  email: string;
  address: Address;
}

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);

  const fetchUsersData = async (): Promise<void> => {
    const res = await fetch("https://fakestoreapi.com/users");
    const data: User[] = await res.json();
    setUsers(data);
  };

  useEffect(() => {
    fetchUsersData();
  }, []);

  return (
    <div >
      <div className={styles.gridContainer}>
        {users.map((user) => (
          <div key={user.id}>
            <p>Ник: {user.username}</p>
            <p>
              Имя, фамилия: {user.name.firstname} {user.name.lastname}
            </p>
            <p>Телефон: {user.phone}</p>
            <p>Email: {user.email}</p>
            <p>Zip-code: {user.address.zipcode}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
