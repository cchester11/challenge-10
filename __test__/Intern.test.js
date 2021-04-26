const Intern = require('../lib/Intern');

test('creates an Intern object', () => {
  const intern = new Intern('Charles', 2, 'cchester@angelo.edu', 'Angelo State')

  expect(intern.name).toEqual(expect.stringContaining('Charles'))
  expect(intern.id).toBe(2)
  expect(intern.email).toEqual(expect.stringContaining('cchester@angelo.edu'))
  expect(intern.school).toEqual(expect.stringContaining('Angelo State'))
});

test('returns the interns school', () => {
  const intern = new Intern('Charles', 2, 'cchester@angelo.edu', 'Angelo State')

  expect(intern.getSchool()).toEqual(expect.stringContaining("Intern's school: Angelo State"))
});

test('returns the interns role', () => {
  const intern = new Intern('Charles', 2, 'cchester@angelo.edu', 'Angelo State')
  
  expect(intern.getRole()).toEqual(expect.stringContaining('Intern'))
})