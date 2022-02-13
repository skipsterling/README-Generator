// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const RMGen = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'Title',
        message: 'What is your repository title?'
    },
    {
        type: 'input',
        name: 'Description',
        message: 'What is your repository description?'
    },
    {
        type: 'input',
        name: 'Install',
        message: 'write your instructions on how to install.'
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'Write your usage section here.'
    },
    {
        type: 'input',
        name: 'Contribute',
        message: 'How can others contribute to your repo?'
    },
    {
        type: 'input',
        name: 'Test',
        message: 'How can others test your application?'
    },
    {
        type: 'list',
        name: 'Licensing',
        message: 'Select a license.',
        choices: ['Apache License 2.0', 'MIT License', 'Mozilla Public License 2.0',
            'GNU GLPv3', 'GNU LGPLv3', 'GNU AGPLv3', 'Boost Software License 1.0', 'The Unlicense'],
    },
    {
        type: 'input',
        name: 'userName',
        message: 'Enter your Github user name.'
    },
    {
        type: 'input',
        name: 'email',
        Message: 'Enter your email address.',
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
