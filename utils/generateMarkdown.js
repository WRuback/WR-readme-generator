// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
  // ["ISC", "MIT", "GPL v3", "GPL v2", "CC by 4.0", "EPL 1.0"]
  switch(license){
    case "ISC":
      return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case "GPL v3":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    case "GPL v2":
      return "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
    case "CC by 4.0":
      return "[![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)";
    case "EPL 1.0":
      return "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
    default:
      return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license){
    case "ISC":
      return "an [Open Source Initiative License](https://opensource.org/licenses/ISC)";
    case "MIT":
      return "a [MIT license](https://opensource.org/licenses/MIT)";
    case "GPL v3":
      return "a [GNU General Public License, V3](https://www.gnu.org/licenses/gpl-3.0)";
    case "GPL v2":
      return "a [GNU General Public License, V2](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
    case "CC by 4.0":
      return "a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/)";
    case "EPL 1.0":
      return "an [Eclipse Public License](https://opensource.org/licenses/EPL-1.0)";
    default:
      return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `This project is licensed under ${renderLicenseLink(license)}.`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title.trim()}

${renderLicenseBadge(data.license)}

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

${renderLicenseSection(data.license)}

## Questions

If you have any questions, please send them to \
[${data.username}](https://github.com/${data.username}) \
at ${data.devEmail} with the heading "${data.title} Question".
`;
}

module.exports = generateMarkdown;
