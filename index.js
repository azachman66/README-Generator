import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

const questions = [
  {
    type: 'input',
    name: 'username',
    message: 'What is your GitHub username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email?',
  },
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'What is the description of your project?',
  },
  {
    type: 'list',
    name: 'license',
    message: 'What kind of license should your project have? (Use arrow keys to select.)',
    choices: ['MIT', 'APACHE-2.0', 'GPL-3.0', 'BSL-1.0', 'Unlicensed'],
  },
  {
    type: 'input',
    name: 'commandDep',
    message: 'What command should be used to install dependencies?',
  },
  {
    type: 'input',
    name: 'commandTest',
    message: 'What command should be run to run tests?',
  },
  {
    type: 'input',
    name: 'info',
    message: 'What does the user need to know about using the repo?',
  },
  {
    type: 'input',
    name: 'contrib',
    message: 'What does the user need to know about contributing to the repo?',
  },
];
  
  inquirer
    .prompt(questions)
    .then((response) => {
      console.log(`Thank you, ${response.username}!`);
      const markdownContent = generateMarkdown(response);
      writeToFile('README.md', markdownContent);
    });
  
  function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
      err ? console.error(err) : console.log(`Generating ${fileName} file...`);
    });
  }
  
  function init() { }
  
  init();
