const inquirer = require('inquirer');
const ReadmeFile = require('./createFile/create');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'project',
      message: 'What is the title of your project?'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please enter the description for your Project:'
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Enter the Installation Instructions:'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Enter the Usage Information:'
    },
    {
    type: 'input',
    name: 'contribution',
    message: 'Enter the Contribution Guidelines:'
    },
    {
    type: 'input',
    name: 'test',
    message: 'Enter the Testing Information:'
    },
    {
      type: 'input',
      name: 'email',
      message: 'Input email use for questions or comments:',
    },
    {
        type:'list',
        name:'license',
        message:'Which license would you like to use for your application?',
        choices:['Apache 2.0 License', 'Boost Software License 1.0', 'Eclipse Public License 1.0', 'The MIT License'],
    
    },
    {
    type: 'input',
    name: 'github',
    message: 'Enter your Github Username'
    }
  ])
  .then((answers) => {
   
    const fillInfo = ReadmeFile.createReadme(answers);
    fs.writeFile('README.md',fillInfo, function (err){
        if (err) {
            console.log('this does not work')
        }
    })
    
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log('there an error somehwere')
    } else {
      console.log('something bad is happening here')
    }
  });