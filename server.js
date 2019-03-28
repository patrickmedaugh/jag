// https://jagql.github.io/pages/project_setup/handlers.html
const jag = require('@jagql/framework');

jag.setConfig({
  port: 8080,
  graphiql: true
});

jag.authenticate((req, cb) => {
  // console.log(req.headers.authenticate);
  // if (req.headers.authenticate !== true) {
  //   return cb('FAIL');
  // }
  // return cb();
  return cb();
});

jag.define({
  resource: 'todos',
  handlers: new jag.MemoryHandler(),
  attributes: {
    title: jag.Joi.string(),
    comments: jag.Joi.string(),
    tags: jag.Joi.string(),
    dueDate: jag.Joi.string()
  },
  examples: [
    {
      id: 'aab14844-97e7-401c-98c8-0bd5ec922d93',
      type: 'todos',
      title: 'The Movie: The Matrix',
      comments: 'This is a movie you can watch with your eyeballs',
      tags: 'Cyber, future, black coats, lazerz',
      dueDate: 'whenevs'
    }
  ]
});

jag.start();
console.log('Running on 8080');
