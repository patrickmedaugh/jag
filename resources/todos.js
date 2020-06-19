const todosHandler = require('../handlers/todos-handler');

const defineTodos = async jag => {
  jag.define({
    resource: 'todos',
    handlers: todosHandler,
    attributes: {
      title: jag.Joi.string(),
      comments: jag.Joi.string(),
      tags: jag.Joi.string(),
      dueDate: jag.Joi.string()
    }
  });
  todosHandler.populate()
}

module.exports = defineTodos;
