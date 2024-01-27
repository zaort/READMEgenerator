// TODO: Include packages needed for this application
const inquierer = require('inquirer');
const fs = require('fs')
// TODO: Create an array of questions for user input
const buildReadme = ({ Title, Description, Installation, Usage, Contributing, Tests, Username, Email, License }) =>
 `# ${Title}

## Description

${Description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${Installation}

---bash---
# Example installation command (Tests)
${Tests}

## Usage

Provide examples and information on how users can use your project. Include code snippets, screenshots, or any other relevant content that can help users understand how to interact with your application or library.

${Usage}

## License
${License}

## Contributing
Explain how others can contribute to your project. Include guidelines for submitting bug reports, feature requests, or code contributions. If you have a code of conduct, link to it here.
${Contributing}

## Questions 
If you have any questions or need further assistance, feel free to reach out.

GitHub: [zaort](https://github.com/${Username})
email: [${Email}](mailto:${Email})

`

inquierer
 .prompt([
  {
   type: 'input',
   name: 'Title',
   message: 'What is the title of your project?',
  },
  {
   type: 'input',
   name: 'Description',
   message: 'Please add a description of your project:',
  },
  {
   type: 'input',
   name: 'Installation',
   message: 'Please add the necessary steps for the installation of your application:',
  },
  {
   type: 'input',
   name: 'Usage',
   message: 'Please add usage information of your application:',
  },
  {
   type: 'input',
   name: 'Contributing',
   message: 'Please add contribution guidelines for your application',
  },
  {
   type: 'input',
   name: 'Tests',
   message: 'Please add the performed tests for your application',
  },
  // Rember this value has to be linked to GitHub - go Back to readme
  {
   type: 'input',
   name: 'Username',
   message: 'What is your GitHub username?',
  },
  {
   type: 'input',
   name: 'Email',
   message: 'What is your email?',
  },
  {
   type: 'list',
   name: 'License',
   message: 'Please add information for the Table of contents?',
   choices: ["MIT License",
    "GNU General Public License (GPL)",
    "Apache License 2.0",
    "BSD 2-Clause 'Simplified' License",
    "BSD 3-Clause 'New' or 'Revised' License",
    "Creative Commons Licenses",
    "Mozilla Public License 2.0",
    "The Unlicense",
    "ISC License (Internet Systems Consortium)",
    "GNU Lesser General Public License (LGPL)",
    "Eclipse Public License (EPL)"],
  },
 ])

 .then((content) => {
  console.log(content);
  const generateReadme = buildReadme(content);
  fs.writeFile(`README.md`, generateReadme, (err) =>
   err ? console.log(err) : console.log('Success!')
  );
 }

 )

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
