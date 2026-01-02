import { availableBooks, customers, isValidBook } from "./catalog.js";

export class Library {
  #delay(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

  async borrowRequest() {
    const start = Date.now();

    const requestId = "092";
    const customerId = "092";
    const bookName = "jeene nahi dunga";
    const mode = "serial";
    const date = new Date().toDateString();

    await this.#delay(1000);

    const end = Date.now();
    return {
      mode,
      requestId,
      bookName,
      customerId,
      date,
      duration: end - start,
    };
  }

  async validateCustomer(customerId) {
    const start = Date.now();
    const mode = "parallel";

    const isCustomerValid = customers.includes(customerId);
    await this.#delay(1000);

    const end = Date.now();
    return {
      mode,
      isCustomerValid,
      duration: end - start,
    };
  }

  async validateBook(bookName) {
    const start = Date.now();
    const mode = "parallel";

    const isBookValid = isValidBook.includes(bookName);
    await this.#delay(1000);

    const end = Date.now();
    return {
      mode,
      bookName,
      isBookValid,
      duration: end - start,
    };
  }

  async isBookAvailable(bookName) {
    const start = Date.now();
    const mode = "serial";

    await this.#delay(2000);
    const isAvailable = availableBooks.includes(bookName);

    const end = Date.now();
    return {
      mode,
      isAvailable,
      duration: end - start,
    };
  }

  async appointBookToCustomer(customerId, bookName) {
    const start = Date.now();
    const mode = "serial";
    await this.#delay(2000);
    const isAvailable = availableBooks.includes(bookName);

    const end = Date.now();
    return {
      mode,
      appointedTo: customerId,
      bookName,
      isAvailable,
      duration: end - start,
    };
  }

  async receiptGenerate(bookName, customerId) {
    const start = Date.now();
    const mode = "parallel";

    await this.#delay(2000);

    const end = Date.now();
    return {
      mode,
      customerId,
      bookName,
      date: new Date().toDateString(),
      duration: end - start,
    };
  }

  async updateRecords() {
    const start = Date.now();
    const mode = "parallel";

    await this.#delay(2000);

    const end = Date.now();
    return {
      mode,
      report: "Record updated successfully",
      date: new Date().toDateString(),
      duration: end - start,
    };
  }
}
