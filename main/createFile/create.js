class ReadmeFile {
    static badger (license){
        
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
    
    
    static createReadme(answers){
   
        return `
# ${answers.project} 

${this.badger(answers.license)}
        
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
}

module.exports = ReadmeFile;
