const Manager = require('../lib/Manager');

test('creates a manager object', () => {
  const manager = new Manager('Charles', 44, 'cchester@angelo.edu', 32)

  expect(manager.name).toEqual(expect.stringContaining('Charles'))
  expect(manager.id).toBe(44)
  expect(manager.email).toEqual(expect.stringContaining('cchester@angelo.edu'))
  expect(manager.officeNumber).toBe(32)
})

test('return the managers office number', () => {
  const manager = new Manager('Charles', 44, 'cchester@angelo.edu', 32)
  
  expect(manager.getOfficeNumber()).toEqual(expect.stringContaining("Manager's office number: 32"))
})