// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title.trim()}

## Table of Contents

- [${data.title.trim()}](#${data.title.trim().toLowerCase().replace(/\s/g, '-')})
  - [Table of Contents](#table-of-contents)
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)

## Description

${data.description}

## Installation

${data.installation}

## Usage

${data.usage}

## Contributing

${data.contributions}

## Tests

${data.tests}

## License

${data.license}

## Questions

If you have any questions, please send them to \
[${data.username}](https://github.com/${data.username}) \
at ${data.devEmail} with the heading "${data.title} Question".
`;
}

module.exports = generateMarkdown;
