
// Install iqnuirer by typing "npm install inquirer" in the console

// required libraries
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");

//takes a function follow the common error-first callback style, i.e. taking a (err, value) => ... callback as the last argument, and returns a version that returns promises
const writeFileAsync = util.promisify(fs.writeFile);




//creates array of questions
function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is the name of your Project?",
            name: "title"
        },
        {
            type: "input",
            message: `Please enter a description of your project.`,
            name: "description"
        },
        {
            type: "input",
            message: "What are the minimum requirements for the user to use your program?",
            name: "installation"
        },
        {
            type: "input",
            message: "How does the user use your program used?",
            name: "usage"
        },
        {
            type: "input",
            message: "Who contributed on this project?",
            name: "contribution"
        },
        {
            type: "input",
            message: "How does the user test the program?",
            name: "test"
        },
        {
            type: "checkbox",
            message: "Please select a license.",
            choices: [
                "Apache",
                "MIT",
                "ISC",
            ],  
            name: "license"
        },
        {
            type: "input",
            message: "Whose credit is this work?",
            name: "credit"
        },
        {
            type: "input",
            message: "What is your GitHub username",
            name: "github"
        },
        {
            type: "input",
            message: "What is your email address",
            name: "email"
        },
    ]);
}

async function init() {
    try {
        const data = await promptUser();
        console.log(data);
        
        await writeFileAsync("README.md", generateMarkdown(data));
        console.log("Success!");
    } catch (err) {
        console.log(err);
    }
}

// function call to initialize program
init();
