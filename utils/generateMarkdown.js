// function to generate markdown for README
function generateMarkdown(data) {
  return `
  <h1>${data.projectTitle}</h1>

  ![badge](https://img.shields.io/badge/license-${data.license})

  ## Description
   ${data.description}

   ## Table of Contents
   - [Description](#description)
   - [Installation](#installation)
   - [Usage](#usage)
   - [License](#license)
   - [Contributing](#contributing)
   - [Tests](#tests)
   - [Questions](#questions)

`;
}

module.exports = generateMarkdown;
// USE THIS****