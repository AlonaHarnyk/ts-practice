// 1. Return Type
// Завдання:
// Напиши функцію sum, яка приймає два числа та повертає їхню суму. Задай явний тип поверненого значення (number).

// const adding = (a: number, b: number): number => a + b;

// console.log(adding(1, 2));
// console.log(adding(1, "2")); //Error

// 2. Void
// Завдання:
// Напиши функцію logMessage, яка приймає рядок і виводить його в консоль. Функція не повинна повертати жодного значення (void).

// const logMessage = (message: string): void => {
//   console.log(message);
// };

// logMessage("Hello word");

// 3. Never
// Завдання:
// Напиши функцію throwError, яка приймає рядок (message) і завжди генерує помилку. Функція повинна мати тип never.

// const throwError = (message: string): never => {
//   throw new Error(message);
// };

// throwError("There is an error");

// 4. Function Type
// Завдання:
// Оголоси тип MathOperation, який описує функцію, що приймає два числа та повертає число. Потім створи функції add і multiply, які відповідають цьому типу.

// type MathOperation = (x: number, y: number) => number;

// const add: MathOperation = (x, y) => x + y;
// const multiply: MathOperation = (x, y) => x * y;

// console.log(add(3, 7)); // Виведе 10
// console.log(multiply(4, 5)); // Виведе 20
