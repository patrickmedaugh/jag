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
    status: jag.Joi.string()
  },
  examples: [
    {
      id: '29937a7c-25b0-4cc5-a8bd-c88b739bd123',
      title: 'Clean the cat',
      comments: 'Need to clean that cat',
      status: 'Not yet done yet'
    }
  ]
});

jag.start();
console.log('Running on 8080');
