class SoftwareEngineer extends Employee {
#programmingLanguages;
constructor(){
    this.#programmingLanguages = [];
}
getProgrammingLanguages(){
    return this.#programmingLanguages;
}
setProgrammingLanguage(language){
    this.#programmingLanguages = language;
}
    
}

module.exports = {
    SoftwareEngineer,
}