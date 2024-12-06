function renderLicenseBadge(data) {
  if (data.license == undefined) {
    return "";
  }
  return `![Static Badge](https://img.shields.io/badge/license-${data.license}-blue)`
}

function renderLicenseLink(data) {
  if (data.license == undefined) {
    return "";
  }
  return `This project is licensed under the [${data.license}](https://choosealicense.com/licenses/${data.license}/) license.`;
}

function renderLicenseSection(data) {
  if (data.license == undefined) {
    return "";
  }
  
  return `
## License

${renderLicenseLink(data)}
`;
}

function generateMarkdown(data) {

  return `# ${data.title}

  ${renderLicenseBadge(data)}

## Description

${data.description}

## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

## Installation
  To install the necessary dependencies, run the following command:
  \`\`\`
  ${data.commandDep}
  \`\`\`

## Usage

${data.info}

${renderLicenseSection(data)}

## Contributing
  ${data.contrib}

## Tests
 To run tests of this repo, execute the following command:
  \`\`\`
  ${data.commandTest}
  \`\`\`

  
  ## Questions
  If you have any questions about the repo, open an issue or contact me directly at [${data.email}](mailto:${data.email}).
  You can find more of my work at [${data.username}](https://github.com/${data.username}).
`;
}

export default generateMarkdown;
