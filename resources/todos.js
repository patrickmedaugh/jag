const mongoose = require('mongoose');
const todosHandler = require('../handlers/todosHandler');
const mongoUrl = 'mongodb://localhost:27017/todos';

const defineTodos = async jag => {
  const mongooseConnect = await mongoose.connect(mongoUrl, { useNewUrlParser: true });
  jag.define({
    resource: 'todos',
    handlers: todosHandler(mongooseConnect),
    attributes: {
      title: jag.Joi.string(),
      comments: jag.Joi.string(),
      tags: jag.Joi.string(),
      dueDate: jag.Joi.string()
    },
    examples: [
      {
        _id: 'aab14844-97e7-401c-98c8-0bd5ec922d93',
        type: 'todos',
        title: 'The Movie: The Matrix',
        comments: 'This is a movie you can watch with your eyeballs',
        tags: 'Cyber, future, black coats, lazerz',
        dueDate: 'whenevs'
      }
    ]
  });
};

module.exports = defineTodos;
