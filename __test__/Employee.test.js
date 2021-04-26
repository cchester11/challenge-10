const Employee = require('../lib/Employee.js')

test('Generates an employee', () => {
  const employee = new Employee('Sam', '12', 'sam@angelo.edu');

  expect(employee.name).toBe('Sam');
  expect(employee.id).toBe('12');
  expect(employee.email).toBe('sam@angelo.edu')
});

test('Returns the employees name', () => {
  const employee = new Employee('Charles', 12, 'cchester@angelo.edu')

  expect(employee.getName()).toEqual(expect.stringContaining('Employee name: Charles'))
  expect(employee.getId()).toEqual(expect.stringContaining('Employee Id: 12'))
  expect(employee.getEmail()).toEqual(expect.stringContaining('Employee e-mail: cchester@angelo.edu'))
  expect(employee.getRole()).toEqual(expect.stringContaining('Employee'))
})