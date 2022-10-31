# Web Automation Framework with BDD

Boilerplate project to write BDD tests with [Cucumber](https://cucumber.io/). 
Tests are written in an ordinary language that bridges the gap between business and technical people.

## Features

- Simple setup, no need for local preinstalled Selenium Grid and browser drivers
- Test with *Chrome* and *Firefox* with zero configuration

- BDD tests with [Cucumber](https://cucumber.io/docs/cucumber/) and over 150 predefined steps
- Implement custom steps with [TypeScript](https://www.typescriptlang.org/)
- Support for debugging tests
- Possibility to visually see the execution in browser with Video Test Results



## Requirements

- Tests are executed with Node.js, requires:
  - `Node.js` version 10 or higher
  - `npm` version 6 or higher


## Quick start

1. Install dependencies required to run the tests:

```sh
npm install
```

2.  CUCUMBER Installation

 
 ```sh
npm install @badeball/cypress-cucumber-preprocessor
```
```sh


3. Install TypeScript

npm install Typescript

4. Update latest node modules 

 npm install 

5. Install tsconfig.ts  file to test folder directory 

 $npx run tsc --init 

    "typescript"
  ],
  "author": "Avin",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/Avin-007/typeScript/issues"
  },
  "homepage": "https://github.com/Avin-007/typeScript#readme",
  "devDependencies": {
    "cypress": "^10.10.0"
  },
  "dependencies": {
    "@badeball/cypress-cucumber-preprocessor": "^13.0.3",
    "@cypress/webpack-preprocessor": "^5.15.0",
    "cypress": "latest",
    "ts-loader": "latest",
    "typescript": "^4.8.4"
  }
}





### Upadate following packages


6. package.json
 
 
{
  "name": "cucumberbdd",
  "version": "1.0.0",
  "description": "test automation with cypress using type script and cucumber",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "tsc": "tsc"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/Avin-007/typeScript.git"
  },
  "keywords": [
    "cypress",
    "automation",
    "gherkins",
    "cucumber",
    "bdd",
 
 
 
 
 7. Replace existing cypress.config.ts  file with the following 
 
 
 import { defineConfig } from "cypress";
import webpack from "@cypress/webpack-preprocessor";

import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";

async function setupNodeEvents(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
): Promise<Cypress.PluginConfigOptions> {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    webpack({
      webpackOptions: {
        resolve: {
          extensions: [".ts", ".js"],
        },
        module: {
          rules: [
            {
              test: /\.ts$/,
              exclude: [/node_modules/],
              use: [
                {
                  loader: "ts-loader",
                },
              ],
            },
            {
              test: /\.feature$/,
              use: [
                {
                  loader: "@badeball/cypress-cucumber-preprocessor/webpack",
                  options: config,
                },
              ],
            },
          ],
        },
      },
    })
  );

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

export default defineConfig({
  e2e: {
    baseUrl: 'https://demo.guru99.com/insurance/v1/index.php',
    specPattern: "**/*.feature",
    supportFile: false,
    setupNodeEvents,
  
  },
});

###  RUN TEST 
 npx cypress open 
 `` select the desired test``
 
### Test examples

|File||
|--|--|
|`./src/features/google.search.feature`|An example of testing the Google search|
|`./src/features/sample.snippets.feature`|Samples of using the existing test snippets. Credits [Christian Bromann](https://github.com/christian-bromann)|

### Adding tests

Tests are written using [Gherkin syntax](https://cucumber.io/docs/gherkin/) in a fashion that can be used as feature documentation:

```gherkin  
# This is a single line comment
Feature: Performing a Google Search

    As a user on the Google search page
    I want to search for Selenium-Webdriver
    Because I want to learn more about it

    Background:
        Given I open the url "https://google.com"

    Scenario: Searching for Selenium Webdriver
        When I set "Selenium Webdriver" to the inputfield "[name=q]"
        And  I press "Enter"
        Then I expect that element "#search" becomes displayed
```

All tests should be located in `./src/features/*` directory with extension `.feature` (configured in `./config/tests.config.ts`).  
For a list of predefined and supported steps see files:
- `./src/steps/given.ts` 
- `./src/steps/when.ts` 
- `./src/steps/then.ts`.  

The steps are inspired from [cucumber-boilerplate](https://github.com/webdriverio/cucumber-boilerplate#list-of-predefined-steps) repository.

### Implementing custom steps
There are over 150 predefined steps, but in case you need an extra step you can add it in one of the `./src/steps` file.  
The snippets are defined using regular expressions. It allows to implement powerful and complex sentences.
Everything that's within `"([^"]*)?"` gets captured and appended to the callback.  
To access browser functionality, reference the global variable `browser` which is a *WebdriverIO* browser instance.
Assertions are written using [chai](https://www.chaijs.com/). 

### Browser specific tests
To run a test against a specific browser use predefined [tags](https://cucumber.io/docs/cucumber/api/#tags):

```gherkin
Feature: Performing a Google Search

    ...

    # This scenario will run only in Chrome browser
    @OnlyChrome
    Scenario: Searching in chrome browser
    ...

    # This scenario will run only in Firefox browser
    @OnlyFirefox
    Scenario: Searching in Firefox browser
    ...
```

### Pending tests

To skip a test, use the `@Pending` tag:
```gherkin
Feature: Performing a Google Search

    ...

    # This scenario will be skipped
    @Pending
    Scenario: Searching for WebdriverIO
    ...
```

