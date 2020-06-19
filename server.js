const jag = require('@jagql/framework');
const initialize = require('./resources');
const auth = require('./auth');

jag.setConfig({
  port: 8080,
});

jag.start(async () => {
  await initialize(jag);
  await auth(jag);
});
console.log('Running on 8080');
