// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generatMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'username'
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email'
    },
    { 
        type: 'input',
        message: 'What is the title of the project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Write a short description of the project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Provide installation instructions for the project.',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'What does the user need to know about using the repo?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'What information does the user need to know about contribuing to the repo?',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'How will the app be tested?',
        name: 'test'
    },
    {
        type: 'list',
        message: 'What kind of license will the project have?',
        name: 'license',
        choices: ['Boost', 'BSD', 'Apache', 'MIT', 'none']
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    let content = generatMarkdown(data);
    fs.writeFile(fileName, content, function (error){
        if (error){
            return console.log(error)
        }
        console.log('file created!')
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function(data){
        var fileName = 'README.md';
        writeToFile(fileName, data)
    });
}

// Function call to initialize app
init();
