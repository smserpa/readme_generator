const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFile = util.promisify(fs.writeFile);

generateReadMe();

async function generateReadMe() {

    try {
        const answers = await userInput();
        const md = renderReadMe(answers);
        await writeFile("README.md", md);
        console.log("Woohoo! Your README.md has been created!")
    } catch (error) {
        console.log(error);
    }
}

const licenses = [
    {
        name: "Apache 2.0 License",
        badge: "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)"
    },
    {
        name: "Eclipse Public License 1.0",
        badge: "![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)"
    },
    {
        name: "IBM Public License Version 1.0",
        badge: "![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)"
    },
    {
        name: "ISC License (ISC)",
        badge: "![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)"
    },
    {
        name: "The MIT License",
        badge: "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)"
    },
    {
        name: "Mozilla Public License 2.0",
        badge: "![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)"
    },
];


function userInput() {

    const questions = [{
        name: "title",
        type: "input",
        message: "Hi! To generate your README.md file please input your title: ",
    },
    {
        name: "description",
        type: "input",
        message: "Great! Now enter a brief description of the app: ",
    },
    {
        name: "installation",
        type: "input",
        message: "Now enter the installation instructions for the app: ",
    },
    {
        name: "usage",
        type: "input",
        message: "Enter the usage information: ",
    },
    {
        name: "license",
        type: "list",
        message: "Please select an open source license: ",
        choices: [
            "Apache 2.0 License", 
            "Eclipse Public License 1.0", 
            "IBM Public License Version 1.0", 
            "ISC License (ISC)", 
            "The MIT License", 
            "Mozilla Public License 2.0"
        ],
    },
    {
        name: "contributions",
        type: "input",
        message: "List of contributors to the project"
    },
    {
        name: "test",
        type: "input",
        message: "Enter the test instructions: ",
    },
    {
        name: "github",
        type: "input",
        message: "What is your GitHub username?",
    }
    ];
    return inquirer.prompt(questions);
}

function renderReadMe({ title, description, installation, usage, license, contributions, test, github, linkedin }) {

let licenseObject = {};

if (license === "Apache 2.0 License") {
    licenseObject.name = licenses[0].name;
    licenseObject.badge = licenses[0].badge;
}else if (license === "Eclipse Public License 1.0") {
    licenseObject.name = licenses[1].name;
    licenseObject.badge = licenses[1].badge;
}else if (license === "IBM Public License Version 1.0") {
    licenseObject.name = licenses[2].name;
    licenseObject.badge = licenses[2].badge;
}else if (license === "ISC License (ISC)") {
    licenseObject.name = licenses[3].name;
    licenseObject.badge = licenses[3].badge;
}else if (license === "The MIT License") {
    licenseObject.name = licenses[4].name;
    licenseObject.badge = licenses[4].badge;
}else if (license === "Mozilla Public License 2.0") {
    licenseObject.name = licenses[5].name;
    licenseObject.badge = licenses[5].badge;
}

return `#  ${title}

## Description

${description}
    
## Table of Contents

    1. Installation
    2. Usage
    3. License",
    4. Contributions
    5. Tests
    6. Questions
    
## Installation

${installation}
    
## Usage

${usage}
    
## License

${licenseObject.name}

${licenseObject.badge}


## Contributions

${contributions}
    
## Tests
    
${test}
    
## Questions
    
### GitHub: [${github}](https://github.com/${github})`;
}
