// https://jagql.github.io/pages/project_setup/handlers.html
const jag = require('@jagql/framework');
const todos = require('./resources/todos');
const auth = require('./auth');

jag.setConfig({
  port: 8080,
  graphiql: true
});

jag.start(async () => {
  await todos(jag);
  await auth(jag);
});
console.log('Running on 8080');
