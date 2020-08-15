function generateMarkdown(data) {
    return `
# ${data.title}
![License](https://img.shields.io/badge/License-${data.license}-blue.svg "License Badge")

## Description:
    ${data.description}

# Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage) 
- [Contributing](#contributing)
- [Test](#test)
- [Credits](#credits)
- [License](#license) 
- [Questions](#questions)

## Installation:
    ${data.installation}
## Usage:
    ${data.usage}
## Contributing:
    ${data.contribution}
## Test:
    ${data.test}
## Credits:
    ${data.credit}
## License:
    For more information about the License, click on the link below.
    
- [License](https://opensource.org/licenses/${data.license})
## Questions:
    Please contact me about this program using the following link: 
- [GitHub Profile](https://github.com/${data.github})
For additional questions please reach out to my email at: ${data.email}.
    Here is a video on how to work the application.
- [Video](https://drive.google.com/file/d/1S7Ghxkw8DkgHQ8dZb39vRoqImev4Hydz/view)
`;
}


module.exports = generateMarkdown;
