'use strict';

module.exports = {
  generateRandomData, generateNewRandomData
};

// Make sure to "npm install faker" first.
const Faker = require('faker');

function generateRandomData(userContext, events, done) {
  // generate data with Faker:
  const taskAction = Faker.random.words(3)
  const taskDue = Faker.date.future()
  const taskLang = Faker.random.locale()
  const taskPriority = Faker.random.number(4)
  // add variables to virtual user's context:
  userContext.vars.taskAction = taskAction;
  userContext.vars.taskDue = taskDue;
  userContext.vars.taskLang = taskLang;
  userContext.vars.taskPriority = taskPriority;
  // continue with executing the scenario:
  return done();
}

function generateNewRandomData(userContext, events, done) {
    // generate data with Faker:
    const taskNewAction = Faker.random.words(3)
    const taskNewPriority = Faker.random.number(4)
    // add variables to virtual user's context:
    userContext.vars.taskNewAction = taskNewAction;
    userContext.vars.taskNewPriority = taskNewPriority;
    // continue with executing the scenario:
    return done();
  }