const todos = require('./todos')

module.exports = async (jag) => {
    await todos(jag)
}