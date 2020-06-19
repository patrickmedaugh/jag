
const Sequelize = require('sequelize')
const relationalDbStore = require('jsonapi-store-relationaldb')

console.log(process.env.DATABASE_URL)
const sequelize = new Sequelize(process.env.DATABASE_URL)

const todosHandler = new relationalDbStore({ sequelize })

module.exports = todosHandler;
