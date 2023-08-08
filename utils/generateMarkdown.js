// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'none') {
    return `![badge](https://img.shields.io/badge/license-${license}-blue)`;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'none') {
    return `[$license}](https://choosealicense.com/licenses/${license})`;
  } else {
    return ' ';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'none'){
    return ` 
    ## [License](#Table-of-Contents)
    This project is covered under the following licence: ${renderLicenseLink(license)}`;
  } else {
    return ' ';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table-of-Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [license](#license)
  * [Contribution](#contribution)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  Run the following command to install the dependencies needed:
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseSection(data.license)}

  ## Contribution
  ${data.contibution}

  ## Tests
  Run the following command to run tests:
  ${data.tests}

  ## Questions 
  If you have any questions contact me below:
  [${data.email}](mailto:${data.email})
  [${data.username}](https://github.com/${data.username}).
`;
}

module.exports = generateMarkdown;
