// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email) {
        this.name= name;
        this.email = email;
        this.id = id;
        // this.officeNumber = officeNumber; 
    
    }

    

    getName(){
        return this.name;

    }

    getId(){
        return this.id;

    }

    getEmail(){
        return this.email;
    }

    getOfficeNumber(){
        return this.officeNumber;
    }

    getRole(){
        return "Employee";
    }
}

module.exports = Employee;