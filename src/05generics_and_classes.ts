// 1. Загальна концепція Generics
// Завдання:
// Напиши узагальнену функцію identity, яка приймає значення будь-якого типу та повертає його ж.

// function identity<T>(value: T): T {
//     return value
// }

// console.log(identity(5))
// console.log(identity("Привіт"))

// 2. Generic function/method
// Завдання:
// Напиши узагальнену функцію getFirstElement, яка приймає масив будь-якого типу та повертає його перший елемент.

// function getFirstElement<T>(arr: T[]): T {
//     return arr[0]
// }

// console.log(getFirstElement([0, 1, 2]))
// console.log(getFirstElement(["a", "b", "c"]))

// 3. Extends (Обмеження Generics)
// Завдання:
// Напиши функцію getLength, яка приймає аргумент з властивістю length (рядки або масиви) та повертає її значення.

// function getLength<T extends {length: number}>(value: T): number {
//     return value.length
// }

// console.log(getLength("Привіт"))
// console.log(getLength([0, 1, 2]))

// 4. keyof (Використання ключів об'єкта)
// Завдання:
// Напиши функцію getProperty, яка отримує об'єкт і ключ цього об'єкта, а потім повертає значення за цим ключем.

// interface IObj {
//   a: number;
//   b: number;
// }

// function getProperty<O, K extends keyof O>(obj: O, key: K): O[K] {
//   return obj[key];
// }

// const obj1: IObj = {
//   a: 1,
//   b: 2,
// };

// console.log(getProperty(obj1, "a"));

// 5. Порівняння за ключем
// Завдання:
// Створи функцію compareByKey<T>, яка приймає два об’єкти одного типу і ключ об'єкта, та повертає true, якщо значення за цим ключем однакові.

// interface IObj {
//   a: number;
//   b: number;
// }

// function compareByKey<T, K extends keyof T>(obj1: T, obj2: T, key: K): boolean {
//   return obj1[key] === obj2[key];
// }

// const obj1: IObj = {
//   a: 1,
//   b: 2,
// };

// const obj2: IObj = {
//   a: 1,
//   b: 3,
// };

// console.log(compareByKey(obj1, obj2, "a"));
// console.log(compareByKey(obj1, obj2, "b"));

// 6. Generic Classes
// Реалізуй generic-клас Repository<T extends { id: number }>, який дозволяє:

// додавати елементи

// знаходити за id

// видаляти за id

// повертає всі елементи

// interface Elem {
//   id: number;
//   name: string;
// }

// class Repository<T extends { id: number }> {
//   private items: T[] = [];

//   public addElem(elem: T): void {
//     this.items.push(elem);
//   }

//   public findElem(id: number): T | undefined {
//     return this.items.find((item) => id === item.id);
//   }

//   public deleteElem(id: number): void {
//     this.items = this.items.filter((item) => id !== item.id);
//   }

//   public getElems(): T[] {
//     return this.items;
//   }
// }

// const repo = new Repository<Elem>();

// const elem = {
//   id: 1,
//   name: "John",
// };

// const elem2 = {
//   id: 2,
//   name: "Ann",
// };

// repo.addElem(elem);
// console.log(repo.getElems());

// repo.addElem(elem2);
// console.log(repo.getElems());

// console.log(repo.findElem(2));

// repo.deleteElem(2);
// console.log(repo.getElems());

// 7. Клас, що імплементує інтерфейс
// Завдання:
// Створи інтерфейс Logger з методом log(message: string): void. Створи клас ConsoleLogger, який реалізує цей інтерфейс.

// interface Logger {
//   log(message: string): void;
// }

// class ConsoleLogger implements Logger {
//   log(message: string): void {
//     console.log(message);
//   }
// }

// const consoleLogger = new ConsoleLogger();

// consoleLogger.log("Hello");

// 8. Інтерфейс + конструктор класу
// Завдання:
// Оголоси інтерфейс Person з name і age. Створи клас, який реалізує цей інтерфейс і додає метод introduce.

// interface Person {
//   name: string;
//   age: number;
// }

// class Student implements Person {
//   constructor(public name: string, public age: number) {}

//   introduce(): void {
//     console.log(`Hello, I'm ${this.name}, ${this.age} years old.`);
//   }
// }

// const student = new Student("Ann", 20);

// student.introduce();

//  9
// interface Interf {
//   readonly id: number;
//   name: string;
//   age: number;
//   email?: string;
// }

// const student: Interf = {
//   id: 1,
//   name: "Ann",
//   age: 20,
// };

// // student.id = 2; error

// 10
// Напиши generic-функцію filterByType, яка приймає масив значень і тип (рядок), і повертає лише значення з цим типом.

// function filterByType<T>(arr: T[], type: string): T[] {
//   return arr.filter((item) => typeof item === type);
// }

// const arr: (string | number | boolean)[] = [1, 2, "a", "b", true, false];

// console.log(filterByType(arr, "string"));
// console.log(filterByType(arr, "boolean"));

// 11
// Створи функцію, яка повертає ключі з об'єкта, де значення мають тип string.

// function filterKeys<T extends object>(obj: T): (keyof T)[] {
//   const filteredKeys: (keyof T)[] = [];
//   for (const key in obj) {
//     if (typeof obj[key] === "string") {
//       filteredKeys.push(key);
//     }
//   }
//   return filteredKeys;
// }

// const student = {
//   id: 1,
//   name: "Ann",
//   age: 20,
// };

// console.log(filterKeys(student));

// 12. Напиши функцію objectToArray, яка перетворює об'єкт Record<string, T> у масив [key, value].

// const data = { a: 1, b: 2, c: 3 };

// function objectToArray<T>(data: Record<string, T>): [string, T][] {
//   const result: [string, T][] = [];

//   for (const key in data) {
//     result.push([key, data[key]]);
//   }

//   return result
// }

// const entries = objectToArray(data); // ➤ [["a",1],["b",2],["c",3]]
// console.log(entries);

// 13. Напиши функцію isEmpty, яка перевіряє, чи є об'єкт або масив порожнім.

// function isEmpty<T>(obj: T): boolean {
//     let result = false;

//     if (Array.isArray(obj) && obj.length === 0) {
//         result = true;
//     } else if (typeof obj === "object" && obj !== null && Object.keys(obj).length === 0) {
//         result = true;
//     }
//     return result;
// }

// console.log(isEmpty({}));
// console.log(isEmpty({ a: 1 }));
// console.log(isEmpty([]));
// console.log(isEmpty([1]));

// 14. Напиши generic-функцію pluck, яка бере масив об'єктів і ключ, і повертає масив значень цього ключа.

// type User = {
//     name: string;
//     age: number;
// };

// const users: User[] = [
//     { name: "Anna", age: 25 },
//     { name: "Bohdan", age: 30 },
// ];

// function pluck<O, K extends keyof O>(data: O[], key: K): O[K][] {
//     const result = data.map((obj) => {
//         return obj[key];
//     });
//     return result;
// }

// const names = pluck(users, "name"); // ➤ ["Anna", "Bohdan"]
// console.log(names);

// 15. Напиши функцію getLengthSafe, яка повертає довжину, якщо значення — рядок або масив.

// function getLengthSafe(data: unknown): number | null {
//     if (typeof data === "string" || Array.isArray(data)) return data.length;
//     return null;
// }

// console.log(getLengthSafe([123, 456, 789]));
// console.log(getLengthSafe("qwerty"));
// console.log(getLengthSafe(12345));

// 16. shape, cycle,

// abstract class Shape {
//     constructor(public color: string) {}

//     abstract getArea(): number;
// }

// class Cycle extends Shape {
//     constructor(color: string, public radius: number) {
//         super(color);
//     }

//     public getArea(): number {
//         return this.radius ** 2 * Math.PI;
//     }
// }

// const cycle = new Cycle("Green", 16);
// const area = cycle.getArea();
// console.log(area);

// 17. Person

// class Person {
//     protected name: string;

//     constructor(name: string) {
//         this.name = name;
//     }

//     introduce(): string {
//         return `Hello, I am ${this.name}`;
//     }
// }

// class Employee extends Person {
//     protected position: string;

//     constructor(name: string, position: string) {
//         super(name);
//         this.position = position;
//     }

//     getDetails(): string {
//         return `${this.name} is ${this.position}`;
//     }
// }

// class Manager extends Employee {
//     changeName(newName: string): void {
//         this.name = newName;
//     }
// }

// const m = new Manager("Stepan", "Developer");
// console.log(m.getDetails());
// m.changeName("Roma");
// console.log(m.getDetails());

// 16. Створи generic-функцію mapObjectValues, яка перетворює значення об'єкта за допомогою колбек-функції.

// const prices = { apple: 1, banana: 2 };

// function mapObjectValues<T, F>(obj: Record<string, T>, callback: (value: T) => F): Record<string, F> {
//     const result = {};

//     for (const key in obj) {
//         result[key] = callback(obj[key]);
//     }

//     return result;
// }

// const withTax = mapObjectValues(prices, (price) => price * 1.2);
// console.log(withTax); // { apple: 1.2, banana: 2.4 }
