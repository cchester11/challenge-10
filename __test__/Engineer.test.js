const Engineer = require('../lib/Engineer');

test('Generates an engineer', () => {
  const engineer = new Engineer('Charles', 23, 'cg@angelo.edu', 'cg@github.com')

  expect(engineer.name).toBe('Charles')
  expect(engineer.id).toBe(23)
  expect(engineer.email).toBe('cg@angelo.edu')
  expect(engineer.github).toBe('cg@github.com')
});

test('returns the engineers github account name', () => {
  const engineer = new Engineer('Charles', '23', 'cg@angelo.edu', 'cg@github.com')

  expect(engineer.getGithub()).toEqual(expect.stringContaining("Employee's gitHub: cg@github.com"));
});

test('returns the engineers role', () => {
  const engineer = new Engineer('Charles', 23, 'cg@angelo.edu', 'cg@github.com')

  expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'))
})