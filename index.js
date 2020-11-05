console.log('Hello Node!')
// declaring variables and dependencies
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")
const writeFileAsync = util.promisify(fs.writeFile);
// prompt user for questions
function promptUser(){
    return inquirer.prompt([
        {
            type: "input",
            name: "projectTitle",
            message: "What is the project title?",
        },
        {
            type: "input",
            name: "description",
            message:"Write a brief description of your project: "
        },
        {
            type: "input",
            name: "installation",
            message: "Describe the installation process: ",
        },
        {
            type: "input",
            name: "usage",
            message: "What is this project usage for?"
        },
        {
            type: "list",
            name: "license",
            message: "Choose the appropriate license for this project: ",
            choices: [
                "Apache",
                "Academic",
                "GNU",
                "ISC",
                "MIT",
                "Mozilla",
                "Open"
            ]
        },
        {
            type: "input",
            name: "contributing",
            message: "Who are the contibutors of this project?"
        },
        {
            type: "input",
            name: "questions",
            message: "What do I do if I have an issue?"
        },
        {
            type: "input",
            name: "questions",
            message: "What do I do if I have an issue?"
        },
        {
            type: "input",
            name: "username",
            message: "Please enter your GitHub username: "
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email: "
        }
    ]);
}

// Async function via util.promisify
async function init() {
    try {
        // Ask questions and gen response
        const data = await promptUser();
        const createContent = generateMarkdown(data);
        // Write the new readme to result folder
        await writeFileAsync('./result/README.md', createContent);
        console.log('wrote file correctly');
    } catch (err) {
        console.log(err);
    }
}







//promptUser();
init();
