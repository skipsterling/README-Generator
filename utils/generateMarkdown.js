// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenceBadge;
  switch (license) {
    case 'Apache License 2.0':
      licenceBadge = '[![License: Apache 2.0](https://img.shields.io/aur/license/android-studio?;style=plastic)';
      break;
      case 'MIT License':
      licenceBadge = '[![License: MIT](https://img.shields.io/apm/l/vim-mode?style=plastic)';
      break;
      case 'Mozilla Public License 2.0':
      licenceBadge = '[![License: Mozilla 2.0](https://img.shields.io/badge/license-Mozilla-green)';
      break;
      case 'GNU GPLv3':
        licenceBadge = '[![License: GPLv3](https://img.shields.io/badge/license-GPLv3-green)';
        break;
        case 'GNU LGPLv3':
      licenceBadge = '[![License: LGPLv3](https://img.shields.io/badge/license-GNU%20LGPLv3-green)';
      break;
      case 'Boost Software License 1.0':
        licenceBadge = '[![License: Boost 1.0](https://img.shields.io/badge/license-Mozilla-green)';
        break;
        case 'The Unlicense':
      licenceBadge = '[![License: The Unlicense](https://img.shields.io/badge/license-The%20Unlicense-green)';
      break;
      case 'License not required':
      licenceBadge = '';
      break;
  }
  return licenceBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenceLink;
  switch (license) {
    case 'Apache License 2.0':
      licenceLink = '[![License: Apache 2.0](https://choosealicense.com/licenses/apache-2.0/)';
      break;
      case 'MIT License':
      licenceLink = '[![License: MIT](https://choosealicense.com/licenses/mit/)';
      break;
      case 'Mozilla Public License 2.0':
      licenceLink = '[![License: Mozilla 2.0](https://choosealicense.com/licenses/mpl-2.0/)';
      break;
      case 'GNU GPLv3':
        licenceLink = '[![License: GPLv3](https://choosealicense.com/licenses/gpl-3.0/)';
        break;
        case 'GNU LGPLv3':
      licenceLink = '[![License: LGPLv3](https://choosealicense.com/licenses/lgpl-3.0/)';
      break;
      case 'Boost Software License 1.0':
        licenceLink = '[![License: Boost 1.0](https://choosealicense.com/licenses/bsl-1.0/)';
        break;
        case 'The Unlicense':
      licenceLink = '[![License: The Unlicense](https://choosealicense.com/licenses/unlicense/)';
      break;
      case 'License not required':
        licenceLink = '';
        break;
  }
  return licenceLink;
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection;
  switch (license) {
    case 'Apache 2.0':
      licenseSection = '## License\n\tThe licensee of this application is Apache 2.0';
      break;
      case 'MIT':
        licenseSection = '## License\n\tThe licensee of this application is MIT';
        break;
        case 'Mozilla 2.0':
          licenseSection = '## License\n\tThe licensee of this application is Mozilla 2.0';
          break;
          case 'GNU GPLv3':
          licenseSection = '## License\n\tThe licensee of this application is GNU GPLv3';
          break;
          case 'Boost 1.0':
            licenseSection = '## License\n\tThe licensee of this application is Boost 1.0';
            break;
            case 'The Unlicense':
            licenseSection = '## License\n\tThe licensee of this application is The Unlicense';
            break;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}
${renderLicenseBadge(data.license)}
${renderLicenseLink(data.license)}

## Description
${data.Description}

## Table of Contents
-[Installation](#Install)
-[Usage](#Usage)
-[Contribution](#Contribute)
-[Testing](#Test)
-[Licensing](#Licensing)
-[Questions](#Questions)

## Installation
${data.Install}

## Usage 
${data.Usage}

${renderLicenseSection(data.license)}

## Contribution 
${data.Contribute}

## Testing
${data.Test}

## Questions
If you have any further questions you can find my details on github (https://github.com/${data.userName})
or you can contact me directly via email. ${data.email}
`;
}

module.exports = {generateMarkdown,}
