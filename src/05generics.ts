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

function getLength<T extends {length: number}>(value: T): number {
    return value.length
}

console.log(getLength("Привіт"))
console.log(getLength([0, 1, 2]))