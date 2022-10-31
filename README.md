
# WEB automation with Cypress & Cucumber

Boilerplate project to write BDD tests with Cucumber. Tests are written in an ordinary language that bridges the gap between business and technical people.

# Features
- Simple setup, no need for local preinstalled Selenium Grid and browser drivers

- Test with Chrome and Firefox with zero configuration

- BDD tests with Cucumber and over 150 predefined steps

- Implement custom steps with TypeScript

- Support for debugging tests

- Possibility to visually see the execution in browser with Video Test Results

# Requirements

- Tests are executed with Node.js, requires:
    - Node.js version 10 or higher
    - npm version 6 or higher

# Quick Start Guide 

1. Installation of dependencies 

   a. Cypress

```sh
npm install cypress --save -dev

```
b. Cucumber Dependencies 

```sh
npm install @badeball/cypress-cucumber-preprocessor

```

c. TypeScript Dependencies 

```sh
npm install Typescript

```

d. Install tsconfig.ts file to cypress directory 

```sh
npx run tsc --init 

```

# Configuration packages 

1. package. json 

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


 2. Replace existing cypress.config.ts file 


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



# Run Test

```sh
npx cypress open

```

# Test Examples 


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
All tests should be located in ./src/features/* directory with extension .feature (configured in ./config/tests.config.ts).
For a list of predefined and supported steps see files:

./src/steps/given.ts
./src/steps/when.ts
./src/steps/then.ts.
The steps are inspired from cucumber-boilerplate repository.















     

