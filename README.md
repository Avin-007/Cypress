A. cypress-cucumber-preprocessor

installation : $ npm install @badeball/cypress-cucumber-preprocessor

Expression 
A step definition’s expression can either be a regular expression or a cucumber expression. The examples in this section use cucumber expressions. If you prefer to use regular expressions, each capture group from the match will be passed as arguments to the step definition’s function.

Given("I have {int} cukes in my belly", (cukes: number) => {});

Arguments 
Steps can be accompanied by doc strings or data tables, both which will be passed to the step definition as the last argument, as shown below.

Feature: a feature
  Scenario: a scenario
    Given a table step
      | Cucumber     | Cucumis sativus |
      | Burr Gherkin | Cucumis anguria |
import { Given, DataTable } from "@badeball/cypress-cucumber-preprocessor";

Given(/^a table step$/, (table: DataTable) => {
  const expected = [
    ["Cucumber", "Cucumis sativus"],
    ["Burr Gherkin", "Cucumis anguria"]
  ];
  assert.deepEqual(table.raw(), expected);
});




B. TypeScript 
 installation : npm install Typescript
 
 
 update node files 
 - npm install 
 
 
 C. Update package.json 
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



D. Replace cypress.config.ts file with 


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

D. add tsconfig.ts file to you folder 
 npx run tsc --init 
 





 

 
 
