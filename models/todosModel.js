const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Todo = new Schema({
  id: ObjectId,
  title: String,
  comments: String,
  tags: String,
  dueDate: String
});

const model = mongoose.model('todos', Todo);

const find = async id => await model.findOne({ _id: id }).catch(e => console.log(e));
const search = async query => await model.find(query).catch(e => console.log(e));
const create = async newRecord => await model.create(newRecord).catch(e => console.log(e));
const destroy = async _id => await model.deleteOne({ _id }).catch(e => console.log(e));
const update = async (_id, updates) => await model.updateOne({ _id }, updates).catch(e => console.log(e));

module.exports = {
  model: mongoose.model('todos', Todo),
  find,
  search,
  create,
  destroy,
  update
};
