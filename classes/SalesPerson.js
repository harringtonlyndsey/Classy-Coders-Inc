class SalesPerson extends Employee {
  #totalSales;
  constructor(clients) {
    this.#totalSales = 0;
    this.clients = [];
  }
  getSalesNumbers() {
    return this.#totalSales;
  }
  makeSale(amount) {
    this.#totalSales = amount;
  }
}

module.exports = {
  SalesPerson,
};
