const fs = require("fs");
const inquirer = require("inquirer");
console.log("In the editors you can use Markup language :")
inquirer
  .prompt([
    {
        type: "input",
        message: "Writte the project title:",
        name: "projectTitle"
      },
      {
        type: "editor",
        message: "Add a descripton:",
        name: "description"
      },
    {
        type: "editor",
        message: "Writte the installation steps:",
        name: "installation"
    },
    {
        type: "input",
        message: "Writte the URL of your Badge:",
        name: "badge"
    },
    {
        type: "editor",
        message: "Writte how the application must be used:",
        name: "usage"
    },
    {
        type: "input",
        message: "Writte the URL of your License:",
        name: "license"
    },
    {
        type: "editor",
        message: "Writte the guidelines for contributors:",
        name: "contributing"
    },
    {
        type: "editor",
        message: "Writte the test you have done for your application:",
        name: "tests"
    },
    {
        type: "editor",
        message: "Questions",
        name: "questions"
    },
    {
        type: "input",
        message: "Writte the URL of your GitHub profile picture: ",
        name: "picture"
    },
    {
        type: "input",
        message: "Writte your GitHub user email:",
        name: "email"
    }
  ])
.then(function(response){
    badgesNum=response.badge;
    let readMeContent= generateReadme(response);
    fs.writeFile("README.md",readMeContent, function(err) {

        if (err) {
          console.log(err);
        }
        else {
          console.log("Commit logged!");
        }
      
      });
});

function generateReadme(response){
    
    let readmeStructure=
    `# ${response.projectTitle} 
![badge](${response.badge})![license](${response.license})   

## Description
${response.description}

## Table of contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [Github info](#Github)

## Installation
${response.installation}

## Usage 
${response.usage}

## Contributing
${response.contributing}

## Tests
${response.tests}

## Questions
${response.questions}

## Github
### Picture
![githubPicture](${response.picture})

### Github Email
<${response.email}>

`;  
  return readmeStructure
}
