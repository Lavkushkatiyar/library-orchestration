import { library } from "./libarary.js";

const myLib = new library();

const userRequest = await myLib.borrowRequest();
console.log({ userRequest });

const validateUserRequest = await Promise.all([
  myLib.validateCustomer(userRequest.CustomerId),
  myLib.validateBooks(userRequest.bookName),
]);
console.log({ validateUserRequest });

const isAvailble = await myLib.isbookAvailble(userRequest.bookName);
console.log(isAvailble);

const appoint = await myLib.appointBook(
  userRequest.bookName,
  userRequest.CustomerId,
);

console.log(appoint);

const updateRecords = await Promise.all([
  myLib.reciptGenerate(userRequest.bookName, userRequest.CustomerId),
  myLib.updateRecords(),
]);
console.log(updateRecords);
