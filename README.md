# Performance Testing with Artillery Workshop 
## Towards QA Automation Certification

### INTRODUCTION

Using Artillery for performance testing is the third and final module towards the QA Automation Certification.
This repository contains an example on how to implement todoist performance testing using Artillery. Using the provided script, the test results reporting will be also in html format, alongside the json file.

The tests implemented here cover topics such as:

- Performance API testing
- Scenarios and weight
- Using random data (Faker.js)

### HOW TO USE THIS REPO

A pre-requisite is to have installed node.js. To install the only dependency which is Artillery, please use the following command.

`npm run install`

### HOW TO RUN THE TESTS

Since the commands have been already entered into the *package.json* file, you can use:

`npm run test` will execute the tests.

The report is also generated with the above command.

### NOTES

In order to follow security guidelines, the *.env file is not included* in the repository, but the only environment variable required to run the test is the token which can be sourced to the bash command line like this:

`export TOKEN="xxxxxxxxxxxxxxxxxxxxxxxx"`

where `"xxxxxxxxxxxxxxxxxxxxx"` is the token provided by todoist.