# README Generator

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents

- [README Generator](#readme-generator)
  - [Table of Contents](#table-of-contents)
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)

## Description

A project for my bootcamp that generates a professional `README.md` for any project. The generated README contains a title, a badge for the license, a table of contents, description, installation, usage, and testing instructions, along with contribution guidelines. You can also have your profile linked with your email so users can ask questions about your project.

## Installation

Download this repository from github. Then, in the terminal, run `npm install` while in this directory. You are then ready to use the generator.

## Usage

In the terminal, while in this directory, run `node index.js`. You will then be prompted by a series of questions about each section of the README. Once all questions are answered, your README will be generated and placed in the `generatedFiles` folder, with the naming syntax `README_project-title.md`.

Also, you can open `config.js` in the `utils` folder. There, you can the values of the Default properties to change the default answer for every question. EX: you can set `usernameDefault` to your username, and that will be the default response to the username question.

## Contributing

Anyone can fork this project and add features. However, all changes to the main section must be approved by the Admin.

## Tests

There are no testing procedures for this project.

## License

This project is licensed under a [MIT license](https://opensource.org/licenses/MIT).

## Questions

If you have any questions, please send them to [WRuback](https://github.com/WRuback) at wrubackdev@gmail.com with the heading "README Generator Question".
