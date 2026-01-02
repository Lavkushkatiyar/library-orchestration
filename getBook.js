import { library } from "./libarary.js";
const myLib = new library();

const userRequest = await myLib.borrowRequest();
console.log({ userRequest });

const validateUserRequest = await Promise.all([
  myLib.validateCustomer(userRequest.CustomerId),
  myLib.validateBooks(userRequest.bookName),
]);
console.log({ validateUserRequest });
