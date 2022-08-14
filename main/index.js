const inquirer = require('inquirer');
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
   console.log(answers)
    const fillInfo = createReadme(answers);
    fs.writeFile('README.md',fillInfo, function (err){
        if (err) {
            console.log('this does not work')
        }
    })
    
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log('there an error somewhere')
    } else {
      console.log('something bad is happening here')
    }
  });

  function createReadme(answers){
   
    return `
# ${answers.project} 

${badger(answers.license)}
 
${answers.description}

## Table of Contents
- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)
- [Contributing](#Contributing)
- [Tests](#Tests)
- [Questions](#Questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
This application is covered under ${answers.license}

## Contributing
${answers.contribution}

## Tests 
${answers.test}

## Questions
Please send any questions or comments to ${answers.email} \n
The attached link is to my Github Profile https://github.com/${answers.github}
     `
    
}
function badger (license){
        
  if (license === 'Apache 2.0 License'){
   license = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  }
  else if (license ==='Boost Software License 1.0'){
      license = '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
  }
  else if(license === 'Eclipse Public License 1.0'){
      license = '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'
  }
  else {
      license = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  }
  return(license)
}
