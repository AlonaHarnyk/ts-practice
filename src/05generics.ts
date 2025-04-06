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

function filterKeys<T extends object>(obj: T): (keyof T)[] {
  const filteredKeys: (keyof T)[] = [];
  for (const key in obj) {
    if (typeof obj[key] === "string") {
      filteredKeys.push(key);
    }
  }
  return filteredKeys;
}

const student = {
  id: 1,
  name: "Ann",
  age: 20,
};

console.log(filterKeys(student));
