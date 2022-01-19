// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Testing if inquirer is working properly',
                name: 'testInput'
            },
        ])
        .then(function (response) {
            console.log(response.testInput);
            fs.writeFile('testlog.txt', response.testInput, (err) =>
                err ? console.error(err) : console.log('Success!')
            );
        }
        );
}

// Function call to initialize app
init();
