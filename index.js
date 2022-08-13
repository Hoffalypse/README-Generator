let inquirer = require('inquirer');

inquirer
  .prompt([
    {
        type: 'input',
        name: 'input-email',
        message: 'What is your email?',
    },
    {
        type: 'input',
        name: 'input-description',
        message: 'Please enter the description for your README'
    },
    {
        type:'list',
        name:'license-choice',
        message:'Which license would you like to use for your application?',
        choices:['Apache 2.0 License', 'Boost Software License 1.0', 'Eclipse Public License 1.0', 'The MIT License'],
        default: 'Apache 2.0 License'
    },
    {
        type: 'input',
        name: 'input-project-name',
        message: 'What is the title of your project?'
    },
    {
    type: 'input',
    name: 'github-username',
    message: 'What is your Github Username?'
    }
  ])
  .then((answers) => {
    console.log(answers)
//   })
//   .catch((error) => {
//     if (error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else went wrong
//     }
  });