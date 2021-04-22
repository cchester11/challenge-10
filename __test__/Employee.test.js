const Employee = require('../lib/Employee.js')

test('Generates an employee', () => {
  const employee = new Employee('Sam', '12', 'sam@angelo.edu');

  expect(employee.name).toBe('Sam');
  expect(employee.id).toBe('12');
  expect(employee.email).toBe('sam@angelo.edu')
});

test('')