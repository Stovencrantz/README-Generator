
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
            message: "What is the name of your project?",
            name: "title"
        }, {
            type: "input",
            message: "Please enter a description of your project.",
            name: "description"
        }, {
            type: "checkbox",
            message: "Please select a license.",
            choices: [
                "Apache",
                "MIT",
                "ISC",
                "None"
            ],
            name: "license"
        }, 
    ])
};

// function to write README file
// function generateMarkdownLang(response) {

// }
// Start sth eprompt to the user and returns either created successfully message or error
async function init() {
    const response = await promptUser();

    try {
        var readMeData = fs.readFile("./utils/generateMarkdown.js", "utf-8", function(error){
            
            if (error) {
                return console.log(error);
            }
        });
        console.log("Index.js: " + generateMarkdown(response));

        // const readMe = readMeData;
        
        await writeFileAsync("README.md", generateMarkdown(response));
        console.log("Readme file created!");
    } catch (err) {
        console.log(err)
    }
}

// function call to initialize program
init();
