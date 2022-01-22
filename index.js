// Needed to access and write files.
const fs = require('fs');
// Needed to ask the questions.
const inquirer = require('inquirer');
// Needed to generate the README markdown.
const generateMarkdown = require('./utils/generateMarkdown.js');
// Needed to pull the default question answers.
const config = require('./utils/config.js');

// The array of questions for Inquirer.
// All are text inputs, except for the License question, that is only the license options.
// Defaults are set to the corresponding values from the config file.
const questions = [
    {
        type: "input",
        message: "What is the title of your Project?",
        name: "title",
        default: config.titleDefault
    },
    {
        type: "input",
        message: "What is the description of your Project?",
        name: "description",
        default: config.descriptionDefault
    },
    {
        type: "input",
        message: "What are the installation instructions of your Project?",
        name: "installation",
        default: config.installationDefault
    },
    {
        type: "input",
        message: "What is the Usage Information of your Project?",
        name: "usage",
        default: config.usageDefault
    },
    {
        type: "input",
        message: "What are the Contribution Guidelines of your Project?",
        name: "contributions",
        default: config.contributionsDefault
    },
    {
        type: "input",
        message: "What are the Test Instructions of your Project?",
        name: "tests",
        default: config.testsDefault
    },
    {
        type: "list",
        message: "What is the License of your Project?",
        choices:["ISC", "MIT", "GPL v3", "GPL v2", "CC by 4.0", "EPL 1.0"],
        name: "license",
        default: config.licenseDefault
    },
    {
        type: "input",
        message: "What is your Username?",
        name: "username",
        default: config.usernameDefault
    },
    {
        type: "input",
        message: "What developer Email?",
        name: "devEmail",
        default: config.devEmailDefault
    },
];

// Writes the data to a README file, speifically sending it to the GeneratedFiles folder.
function writeToFile(fileName, data) {
    fs.writeFile('./generatedFiles/' + fileName, data, (err) =>
                err ? console.error(err) : console.log('Success!')
            );
}

// Runs on startup. Starts Inquirer prompting the questions from the questions list.
// Once the prompts are done, it sends the data object to the generateMarkdown function,
// And then writes what was made to a new README file.
function init() {
    inquirer
        .prompt(questions)
        .then(function (data) {
            let generatedReadMe = generateMarkdown(data);
            writeToFile(`README_${data.title.trim().toLowerCase().replace(/\s/g, '-')}.md`, generatedReadMe);
        }
        );
}

// Initializes the app.
init();
