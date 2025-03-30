// 1. Type Guards (Перевірка типів)
// Завдання:
// Напиши функцію printValue, яка приймає number | string. Якщо це число — повертає його квадрат, якщо рядок — повертає довжину рядка.

// const printValue = (value: number | string): number => {
//     if (typeof value === "number") {
//         return value ** 2
//     } else {
//         return value.length
//     }
// }

// console.log(printValue(5))
// console.log(printValue("555"))

// 3. Index Properties (Індексні підписи)
// Завдання:
// Створи тип Dictionary, де ключі — рядки, а значення можуть бути рядками або числами.

type Dictionary = {
    [key: string]: string | number;
}

const obj: Dictionary = {
    name: "Jo",
    age: 18
}

console.log(obj)