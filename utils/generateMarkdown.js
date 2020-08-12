// function to generate markdown for README



function generateMarkdown(response) {
  return `
  # ${response.title}

  # Table of Contents

  - [Description] (#description)
  - [License](#license)

  ## Description
      ${response.description}

  ## License:
      ${response.license}

  ## Installation
      ${response.installation}

  ## Usage
      ${response.contributing}

  ## Testing
      ${response.test}

`;
}
module.exports = generateMarkdown;
