// function to generate markdown for README



function generateMarkdown(data) {
  return `
    # ${data.title}

    ## Description
    ${data.description}

    # Table of Contents

    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [License](#license)

    ## Installation:      
        ${data.installation} 

    ## Usage:
        ${data.usage}

    ## Contributors:
        ${data.contribution}

    ## License:
        ${data.license}
    
    #Test:
        ${data.test}

    ## Questions:
        Contact me at:
        [${data.gitHub}](https://github.com/${data.gitHub})
        [${data.email}](${data.email})

    ## Badges:
        ${data.badges}
`;
}


module.exports = generateMarkdown;
