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

   ## Installation
   ${data.installation}

   ## Usage
   ${data.usage}

   ## License
   ![badge](https://img.shields.io/badge/license-${data.license})

   This application is covered by the ${data.license} license.

   ## Contributing
   ${data.license}

   ## Tests
   ${data.tests}

   ## Questions
   ${data.questions}<br />

   Find me on Github: [${data.username}](https://github.com/${data.username})<br />

   Email me with any questions: ${data.email}

`;
}
// links the generateMarkdown function to the index.js file
module.exports = generateMarkdown;
// USE THIS****