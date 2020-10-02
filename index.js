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
        console.log("Woohoo!")
    } catch (error) {
        console.log(error);
    }

}



function userInput() {
    const licenses = [
        {
            name: "Apache 2.0 License",
            badge: "", 
        },
        {
            name: "Eclipse Public License 1.0",
            badge: "",
        },
        {
            name: "IBM Public License Version 1.0",
            badge: "",
        },
        {
            name: "ISC License (ISC)",
            badge: "",
        },
        {
            name: "The MIT License",
            badge: "",
        },
        {
            name: "Mozilla Public License 2.0",
            badge: "",
        },
    ];

    const badge = licenses.badge;


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
        messsage: "Now enter the installation instructions for the app: ",
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
        choices: licenses,
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
    },
    {
        name: "linkedin",
        type: "input",
        message: "What is your LinkedIn username?",
    },
    ];
    return inquirer.prompt(questions);
}

function renderReadMe({ title, description, installation, usage, license, contributions, test, github, linkedin }) {
    return `#  ${title}

    ## Description

    ${description}
    
    ## Table of Contents
    
    ## Installation

    ${installation}
    
    ## Usage

    ${usage}
    
    ## License

    ${license}

    ## Contributions

    ${contributions}
    
    ## Tests
    
    ${test}
    
    ## Questions
    
    ${github}
    ${linkedin}`;
}





// prompt the user to select a license from a list
// const licenses = [
//     "Apache 2.0 License",
//     "Eclipse Public License 1.0",
//     "IBM Public License Version 1.0",
//     "ISC License (ISC)",
//     "The MIT License",
//     "Mozilla Public License 2.0",
// ];

// inquirer.prompt([{
//     name: "license",
//     type: "list",
//     message: "Select a license: ",
//     choices: licenses
// }]).then(answers => {

// }).catch(error => {
//     console.log(error);
// })
