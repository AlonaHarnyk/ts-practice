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
