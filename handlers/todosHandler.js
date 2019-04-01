const todosModel = require('../models/todosModel');
const memoryHandler = () => new jag.MemoryHandler();

const mongoHandler = db => ({
  ready: true,
  initialise: () => {},
  close: () => {},
  find: todosModel.find(db),
  search: todosModel.search(db),
  create: todosModel.create(db),
  delete: todosModel.destroy(db),
  update: todosModel.update(db)
});

module.exports = mongoHandler;
