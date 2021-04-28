//import manager, intern, and engineer js (check)
//import inquirer and jest (check)
//create an empty array that stores employee's (check)
//use inquirer to create a prompt for manager, intern, and engineer (check)
//use .then to convert response into
//push response after being used to make a new Employee to array (check)
//create an fs.writeFile function (check)
//put the html template in the writeFile function as the value ex: returnHTML (check)
//use the prompt input of the respective employee as the parameter for the writeFile function

//steps
//1. make all classes in lib folder (check)
//2. finish index.js(almost done)
//3. work on template js
//4. work on testing (check)

const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const template = require('./src/template')
const Jest = require('jest');
const inquirer = require('inquirer');
const fs = require('fs');

const employees = [];

//ask if they want to create a new employee or quit the application
let userPrompt = () => {
  inquirer.prompt ([
    {
      type: 'confirm',
      name: 'nextEmployee',
      message: 'Would you like to add an employee?',
      default: false
    }
  ])
  .then(({ nextEmployee }) => {
    if(nextEmployee === false) {
      stopApplication(employees);
    } else {
      inquirer.prompt ([
        {
          type: 'checkbox',
          name: 'pickNextEmployee',
          message: 'What employee would you like to add next?',
          choices: ['manager', 'intern', 'engineer'],
        }
      ])
      .then(({ pickNextEmployee }) => {
        if(pickNextEmployee == 'manager') {
          return managerPrompt();
        }
        else if(pickNextEmployee == 'intern') {
          internPrompt();
        }
        else if(pickNextEmployee == 'engineer') {
          return engineerPrompt();
        }
      })
    }
  })
}

let managerPrompt = () => {
  inquirer.prompt([
  {
    type: 'input',
    name: 'name',
    message: 'What is your name?',
  },
  {
    type: 'input',
    name: 'id',
    message: 'What is your badge number?'
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email?'
  },
  {
    type: 'input',
    name: 'officeNumber',
    message: 'What is your office number?'
  }
])
.then(function({name, id, email, officeNumber}) {
  //use the manager class to create a new manager with the data given(check)
  //add the new employee to the array(check)
  //call userPrompt(check)
  employees.push(new Manager(name, id, email, officeNumber));
  console.log(employees);
  userPrompt();
})
}

let engineerPrompt = () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is your badge number?'
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email?'
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your github username?'
    }
  ])
  .then(function({name,id, email, github}) {
    //use the manager class to create a new manager with the data given(check)
    //add the new employee to the array(check)
    //call userPrompt(check)
    employees.push(new Engineer(name, id, email, github));
    console.log(employees);
    userPrompt();
  });
};

let internPrompt = () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is your badge number?'
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email?'
    },
    {
      type: 'input',
      name: 'school',
      message: 'What is the name of your school?'
    }
  ])
  .then(function({name, id, email, school}) {
    //use the manager class to create a new manager with the data given(check)
    //add the new employee to the array(check)
    //call userPrompt(check)
    employees.push(new Intern(name, id, email, school));
    console.log(employees)
    userPrompt();
    console.log
  })
}


function stopApplication(returnHTML) {
  //write the file here
  const generatePage = template(returnHTML)
  fs.writeFile('./dist/index.html', generatePage, 'UTF-8', err => {
    if(err) {
      return console.log(err)
    }
    console.log('Page successfully created')
  })
}

userPrompt();

module.exports = employees;

