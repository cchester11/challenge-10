//import manager, intern, and engineer js
//import inquirer and jest
//create an empty array that stores employee's
//use inquirer to create a prompt for manager, intern, and engineer
//use .then to convert response into
//push response after being used to make a new Employee to array 
//create an fs.writeFile function 
//put the html template in the writeFile function as the value ex: returnHTML (input)
//use the prompt input of the respective employee as the parameter for the writeFile function

//steps
//1. make all classes in lib folder
//2. finish index.js
//3. work on template js
//4. work on testing

const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const Inquirer = require('inquirer');
const Jest = require('jest');
const inquirer = require('inquirer');

const employees = [];

//ask if they want to create a new employee or quit the application
let userPrompt = () => {

}

let managerPrompt = () => {
  inquirer.prompt([{
    type: 'input',
    name: 'name',
    message: 'What is your name?',
  },
  {
    type: 'input',
    name: 'ID',
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
.then(function(data){
  //use the manager class to create a new manager with the data given
  //add the new employee to the array(check)
  //call userPrompt(check)
  employees.push(data);
  
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
      name: 'ID',
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
  .then(function(data){
    //use the manager class to create a new manager with the data given
    //add the new employee to the array
    //call userPrompt
  })

}

let internPrompt = () => {
  inquirer.prompt9([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'ID',
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
  .then(function(data){
    //use the manager class to create a new manager with the data given
    //add the new employee to the array
    //call userPrompt
  })

}


function stopApplication() {
  //write the file here
}

