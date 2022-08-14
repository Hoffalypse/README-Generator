class ReadmeFile {
    static createReadme(answers){
        return `# ${answers.project} 
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
 ${answers.license}

## Contributing
${answers.contribution}

## Tests 
${answers.test}

## Questions
Please send any questions or comments to ${answers.email}
         `
        
    }
}

module.exports = ReadmeFile;
