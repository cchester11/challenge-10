//parent class with all the base-line prototypes for each employee
function Employee(name, id, email) {
  this.name = name;
  this.id = id;
  this.email = email;
};

Employee.prototype.getName = function() { 
  return `Employee name: ${this.name}`
};

Employee.prototype.getId = function() {
  return `Employee Id: ${this.id}`
};

Employee.prototype.getEmail = function() {
  return `Employee e-mail: ${this.email}`
};

//Returns the 'Employee'
Employee.prototype.getRole = function() {
  return 'Employee'
};

module.exports = Employee;