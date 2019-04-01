const todosModel = require('../models/todosModel');
const memoryHandler = () => new jag.MemoryHandler();

const mongoHandler = db => ({
  ready: true,
  initialise: () => {},
  close: () => {},
  find: todosModel.find,
  search: todosModel.search,
  create: todosModel.create,
  delete: todosModel.destroy,
  update: todosModel.update
});

module.exports = mongoHandler;
