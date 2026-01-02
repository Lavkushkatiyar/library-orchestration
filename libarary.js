import { availbleBook, customers, isValidBook } from "./catelog.js";
export class library {
  #delay(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }
  async borrowRequest() {
    const requestId = "092";
    const CustomerId = "092";
    const bookName = "jeene nahi dunga";
    const mode = "serieal";
    const d = new Date();
    const date = d.toDateString();
    await this.#delay(1000);

    return { mode, requestId, bookName, CustomerId, date };
  }
  async validateCustomer(CustomerId) {
    const mode = "paralell";
    const isCustomer = customers.includes(CustomerId);
    await this.#delay(1000);

    return { mode, isCustomer };
  }
  async validateBooks(bookName) {
    const mode = "paralell";
    const validBook = isValidBook.includes(bookName);
    await this.#delay(1000);
    return { mode, bookName: validBook };
  }

  async isbookAvailble(bookName) {
    const mode = "serial";
    await this.#delay(2000);
    const isAvailble = availbleBook.includes(bookName);
    return { mode, isAvailble };
  }

  async appointBook(userName, bookName) {
    const mode = "serial";
    await this.#delay(2000);
    const appointBook = availbleBook.includes(bookName);
    return { mode, apointedTo: userName, isAvailble: appointBook };
  }
  async reciptGenerate(bookName, CustomerId) {
    const mode = "paralell";
    await this.#delay(2000);
    return {
      mode,
      customer: CustomerId,
      appointed: bookName,
      date: Date.now(),
    };
  }
  async updateRecords() {
    const mode = "paralell";
    await this.#delay(2000);
    return { mode, report: `record updated Sucessfully`, date: Date.now() };
  }
}
