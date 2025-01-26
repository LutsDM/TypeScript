// /* eslint-disable @typescript-eslint/no-unused-vars */
// console.log("hello ts");

// let x = 10; // пример неявного
// // x = "text";

// // Как типизировать? 
// // Явно vs Неявно
// // Как явно задать тип переменной?
// // При объявлении переменной мы указываем тип:

// let y: number = 11; // пример явного
// let p: string;
// p = "welcome to ts";

// let isDrunk: boolean = true;

// // ключевое слово type
// // мы можем объявлять типы отдельно:

// type Age = number; // типы всегда пишутся с большой буквы 
// let myAge: Age = 29;


// // Union type:   yyyy | xxxx

// let k: number | string = 10;
// k = "10";
// console.log(k);

// // Еще примеры union

// type Pet = "cat" | "dog";
// let petOfAlex: Pet ="dog";
// petOfAlex = "cat";


// // Можно раcширить union 

// type ExtendedPet = Pet | "snake";
// let myPet: ExtendedPet;
// myPet = "snake";

// // Еще один пример того же самого 
// // создание типов:
// type Gender = "male" | "female";
// type ExtendedGender = Gender | " non-binary person";


// // Как типизировать массив стрингов

// let fruits: string[] = ['apple','orange','mango'];
// // особенно важно указыватьтип при создании пустого массива
// let vegetables: string[]=[];
// vegetables.push('carrot')

// // Как типизировать объекты?
// // - первый способ - не предпочтительный 
// // создали тип юзер 

// type User = {
//     firstName:string;
//     isAdmin:boolean;
// }

// const user1: User = {
//     firstName:'Vladimir',
//     isAdmin:false
// }

// // - второй способ - очень популярный - через интерфейс 

// interface Monster {
//     name:string,
//     height:number,
//     isAlive:boolean,
//     isEvil:boolean,
//     hasTentacles:boolean
// }

// // создал объект указанного типа 

// const frankestein: Monster = {
//     name: "Frankenstein Monster",
//     height: 210,
//     isAlive: true,
//     isEvil: false,
//     hasTentacles: false
// }
// // Когда использовать interface или type:

// // Для описания объектов и их расширения предпочтительнее interface.
// // Для сложных комбинаций типов или использования примитивов выбирайте type.


// // мы можем расширять интерфейсы 
// // Мы можем создать нового монстра на основании интерфейса Монстра

// interface ExtendedMonster extends Monster {
//     isFlying:boolean;
// }

// const dracula: ExtendedMonster = {
//     name: "Vlad",
//     height: 178,
//     isAlive: false,
//     isEvil: true,
//     hasTentacles: false,
//     isFlying: true
// }

// // опциональные поля 

// interface Food {
//     title:string;
//     isSweet?:boolean;
// }

// const pancake: Food = {title:"Pancakes", isSweet:true}

// // Создать интерфейс город City
// // со следующими полями
// //  - name
// //  - population - число горожан 
// //  - riversName - опциональное поле название реки - 
// //  - isTouristic - является ли туристическим или нет
// //  - isCapital - является ли столицей 

// // Создайте несколько объектов для этого интерфейса 

// // дополнительно сделайте интерфейс - расширяющий город
// // например, добавьте дату основания 


// // Типизация функций 
// // Что нужно типизирвовать? Параметры, возвращаемое значение

// function sum (a:number, b:number): number{
//     return a+b;
// }
// const dev = (a:number, b:number): number => a/b;

// console.log(sum(10,12));
// console.log(dev(20,2));

// function toUpper(str:ExtendedPet): string{
//     return str.toUpperCase();
// }

// console.log(toUpper("snake"));


