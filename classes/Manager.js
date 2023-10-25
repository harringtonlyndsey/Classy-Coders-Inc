class Manager extends Employees {
  #employeesManaged;
  constructor(department) {
    this.#employeesManaged = [];
    this.department = department;
  }
  getEmployeesManaged() {
    return this.#employeesManaged;
  }
  setEmployeesManaged(employee) {
    this.#employeesManaged = employee;
  }
}
module.exports = {
  Manager,
};
