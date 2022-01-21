// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of your Project?",
        name: "title"
    },
    {
        type: "input",
        message: "What is the description of your Project?",
        name: "description"
    },
    {
        type: "input",
        message: "What are the installation instructions of your Project?",
        name: "installation"
    },
    {
        type: "input",
        message: "What is the Usage Information of your Project?",
        name: "usage"
    },
    {
        type: "input",
        message: "What are the Contribution Guidelines of your Project?",
        name: "contributions"
    },
    {
        type: "input",
        message: "What are the Test Instructions of your Project?",
        name: "tests"
    },
    {
        type: "list",
        message: "What is the License of your Project?",
        choices:["ISC", "MIT", "GPL v3", "GPL v2", "CC by 4.0", "EPL 1.0"],
        name: "license"
    },
    {
        type: "input",
        message: "What is your Username?",
        name: "username"
    },
    {
        type: "input",
        message: "What developer Email?",
        name: "devEmail"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('./generatedFiles/' + fileName, data, (err) =>
                err ? console.error(err) : console.log('Success!')
            );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(function (data) {
            console.log(data);
            let generatedReadMe = generateMarkdown(data);
            writeToFile("README.md", generatedReadMe);
        }
        );
}

// Function call to initialize app
init();
