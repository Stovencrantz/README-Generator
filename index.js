
// Install iqnuirer by typing "npm install inquirer" in the console

// required libraries
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");

//takes a function follow the common error-first callback style, i.e. taking a (err, value) => ... callback as the last argument, and returns a version that returns promises
const writeFileAsync = util.promisify(fs.writeFile);

var readMeData = fs.readFile("./utils/generateMarkdown.js", "utf-8", function(error){
    if (error) {
        return console.log(error);
    }
});


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
            type: "input",
            message: "List the steps to download and run your program",
            name: "installation",            
        }, {
            type: "input",
            message: "Please provide instructions and examples on how to use your program",
            name: "usage"
        }, {
            type: "input",
            message: "List any third party assets or tutorials you used",
            name: "credits"
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
        },  {
            type: "input",
            message: "Enter your GitHub username:",
            name: "gitHub"
        }, {
            type: "input",
            message: "Enter your email address",
            name: "email"
        },
        {
            type: "input",
            message: "Enter a badge link",
            name: "badge"
        }
    ])
};


// Start sth eprompt to the user and returns either created successfully message or error
async function init() {
    const data = await promptUser();

    try {
        console.log("Index.js: ", generateMarkdown(data));

        
        await writeFileAsync("README.md", generateMarkdown(data));
        console.log("Readme file created!");
    } catch (err) {
        console.log(err)
    }
}

// function call to initialize program
init();
