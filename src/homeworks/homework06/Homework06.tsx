// /* eslint-disable @typescript-eslint/no-unused-vars */
// let x = 42;
// x = "Hello";
// // Возникает ошибка т.к изначально неявно переменной х назначается тип number а потом переназначается значение типа string
// const y: string = "TypeScript is awesome!"

// type Age = number;
// const myAge: Age = 30;


// type Condition = "active" | 1;
// let status: Condition

// type Animal = "cat" | "dog";
// type ExtendedAnimal = Animal | "parrot";
// const myPet: ExtendedAnimal = "parrot";

// const fruits: string[] = [];
// fruits.push('apple','banana')

// const number: number[] = [];
// number.push(5, 10);

// type Person = {
//     name: string;
//     age: number;
// }
// const myPerson: Person = {
//     name: "Dmytro",
//     age: 38
// }

// interface Car  {
//     model: string;
//     year: number;
//     isElectric: boolean
// }

// const myCar: Car = {
//     model: "BMW",
//     year: 2020,
//     isElectric: true
// }

// interface ElectricCar extends Car {
//     batteryCapacity: number
// }

// interface Book {
//     title: string;
//     author: string;
//     publishedYear?: number
// }

// const myBook: Book = {
//  author: "author1",
//  title: "nambook"
// }

// const myBook2: Book = {
//     author: "author2",
//     title: "nnnn",
//     publishedYear: 2000
// }

// interface City {
//     name: string,
//     population: number,
//     isCapital: boolean,
//     riverName?: string
// }