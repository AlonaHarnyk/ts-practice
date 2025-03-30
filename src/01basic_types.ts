// 1. Any // Task: // Declare a variable data of type any,
// assign it first a number, then a string, and then an object.
// Use this variable in a function that accepts a value of any type and returns it unchanged.

// let testTsVar: any;
// testTsVar = 5;
// testTsVar = 'value';
// testTsVar = {};

// function procesData (data:any):any {
//   return data;
// }

// console.log(procesData(testTsVar));

// 3. Tuple // Task: // Declare a tuple userInfo
// that contains a string (username) and a number (age).
//  Add values ​​to it and access the elements.

// let userInfo:[string, number];

// userInfo = ['Ivan', 27];
// console.log(`User: ${userInfo[0]}, Age: ${userInfo[1]}`);

// 4. Enum // Task: // Create an enum for order statuses (Pending, Shipped, Delivered).
// Write a function that takes the status and returns a message about the order status.

// enum OrderStatus {
//   Pending = 'очікується',
//   Shipped = 'відправлено',
//   Delivered = 'доставлено',
// }

// function getOrderStatus (status:OrderStatus):string {
//   return `Ваш статус: ${status}`;
// }

// console.log(getOrderStatus(OrderStatus.Pending));

//   5. Union Type
// Завдання:
// Напиши функцію formatID, яка приймає number | string та повертає його у форматі рядка.

// function formatID(id: number | string): string {
//   return `ID: ${id}`;
// }

// console.log(formatID(123)); // Виведе "ID: 123"
// console.log(formatID("ABC")); // Виведе "ID: ABC"

//   6. Intersection Type
// Завдання:
// Створи два типи: Person (з name та age) і Employee (з jobTitle). Об'єднай їх в один тип Worker, оголоси змінну та присвой їй значення.

// type Person = {
//   name: string;
//   age: number;
// };

// type Employee = {
//   jobTitle: string;
// };

// type Worker1 = Person & Employee;

// let worker: Worker1 = {
//   name: "John",
//   age: 30,
//   jobTitle: "Software Engineer",
// };

// console.log(worker);
// Виведе { name: "John", age: 30, jobTitle: "Software Engineer" }

// 7. Literal Type
// Завдання:
// Створи функцію setAlignment, яка приймає тільки 'left' | 'right' | 'center' і повертає відповідне повідомлення.

// function setAlignment(alignment: "left" | "right" | "center"): string {
//   return `Вирівнювання встановлено: ${alignment}`;
// }

// console.log(setAlignment("left")); // Виведе "Вирівнювання встановлено: left"
// console.log(setAlignment("center")); // Виведе "Вирівнювання встановлено: center"
