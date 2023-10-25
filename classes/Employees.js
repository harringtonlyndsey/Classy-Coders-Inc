class Employees {
    #salary;
    #isHired;
constructor(name, position){
    this.#salary = salary;
    this.#isHired = isHired;
    this.name = name;
    this.position = position;
}
getSalary(){
    return this.#salary;
}
setSalary(amount){
    this.#salary = amount;
}
getStatus(){
    return this.#isHired;
}
setStatus(command){
    if(this.#isHired === "hire"){
        return true;
}    else{
    return false;
}
}

module.exports = {
    Employees,
}