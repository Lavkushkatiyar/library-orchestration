import { Library } from "./libarary.js";

const myLib = new Library();

const userRequest = await myLib.borrowRequest();
console.log({ userRequest });

const validateUserRequest = await Promise.all([
  myLib.validateCustomer(userRequest.CustomerId),
  myLib.validateBook(userRequest.bookName),
]);
console.log({ validateUserRequest });

const isAvailble = await myLib.isBookAvailable(userRequest.bookName);
console.log(isAvailble);

const appoint = await myLib.appointBookToCustomer(
  userRequest.customerId,
  userRequest.bookName,
);

console.log(appoint);

const updateRecords = await Promise.all([
  myLib.receiptGenerate(userRequest.bookName, userRequest.customerId),
  myLib.updateRecords(),
]);
console.log(updateRecords);
