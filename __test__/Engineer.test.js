const Engineer = require('../lib/Engineer');

test('Generates an engineer', () => {
  const engineer = new Engineer('Charles', 'cg@angelo.edu', '23', 'cg@github.com')

  expect(engineer.name).toBe('Charles')
  expect(engineer.email).toBe('cg@angelo.edu')
  expect(engineer.id).toBe('23')
  expect(engineer.github).toBe('cg@github.com')
});