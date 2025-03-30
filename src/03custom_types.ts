// 1. Type Alias (Псевдонім типу)
// Завдання:
// Створи тип User, який містить name (рядок) і age (число). Напиши функцію greetUser, яка приймає об’єкт User і повертає рядок із привітанням.

// type User = {
//   name: string;
//   age: number;
// };

// const greetUser = (user: User): string => {
//   return `Hello, ${user.name}`;
// };

// const user1 = {
//   name: "John",
//   age: 20,
// };

// console.log(greetUser(user1));

//   2. Interface (Інтерфейс)
// Завдання:
// Створи інтерфейс Car з полями brand (рядок) і year (число). Напиши функцію getCarInfo, яка приймає Car і повертає рядок з інформацією про авто.

// interface Car {
//   brand: string;
//   year: number;
// }

// const getCarInfo = (car: Car): string => {
//   return `this is ${car.brand} of ${car.year} year`;
// };

// const car1 = {
//   brand: "Mercedes",
//   year: 2024,
// };

// console.log(getCarInfo(car1));

// 3. Type vs Interface
// Завдання:
// Створи type і interface для опису користувача з іменем (name) та роллю (role: "admin" | "user"). Покажи, як їх можна розширювати.

// type UserType = {
//   name: string;
//   role: "admin" | "user";
// };

// interface UserInterface {
//   name: string;
//   role: "admin" | "user";
// }

// type SuperUserType = UserType & { permissions: string[] };

// interface SuperUserInterface extends UserInterface {
//   permissions: string[];
// }

// const user: SuperUserType = {
//   name: "John",
//   role: "admin",
//   permissions: ["read", "edit"],
// };
// console.log("🚀 ~ user:", user);

// const user2: SuperUserInterface = {
//   name: "John",
//   role: "admin",
//   permissions: ["read", "edit"],
// };
// console.log("🚀 ~ user2:", user2);

// 4. Custom Union Type
// Завдання:
// Створи type для Shape, який може бути circle (з радіусом) або rectangle (з шириною і висотою). Напиши функцію getArea, яка обчислює площу фігури.

// enum ShapeTypes {
//   Circle = "circle",
//   Rectangle = "rectangle",
// }

// type Shape =
//   | {
//       type: ShapeTypes.Circle;
//       radius: number;
//     }
//   | {
//       type: ShapeTypes.Rectangle;
//       width: number;
//       height: number;
//     };

// const getArea = (shape: Shape): number => {
//   if (shape.type === ShapeTypes.Circle) {
//     return Math.PI * shape.radius ** 2;
//   } else {
//     return shape.width * shape.height;
//   }
// };

// const circle: Shape = {
//   type: ShapeTypes.Circle,
//   radius: 5,
// };

// const rectangle: Shape = {
//   type: ShapeTypes.Rectangle,
//   width: 2,
//   height: 3,
// };

// console.log(getArea(circle));
// console.log(getArea(rectangle));

// 5. Custom Mapped Type
// Завдання:
// Створи mapped type ReadonlyUser, який робить усі властивості User лише для читання (readonly).

// type User = {
//   name: string;
//   age: number;
// };

// type ReadonlyUser = Readonly<User>;

// const user: ReadonlyUser = {
//   name: "John",
//   age: 20,
// };

// user.age = 30; // Error

// console.log("🚀 ~ user:", user);
