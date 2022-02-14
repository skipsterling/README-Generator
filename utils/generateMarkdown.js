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

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
