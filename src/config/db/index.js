// Using Node.js `require()`
const mongoose = require('mongoose')

async function connect() {
    mongoose.connect('mongodb://127.0.0.1:27017/f8_blog_study')
        .then(() => console.log('Connect succefully'))
        .catch((error)=>console.log('Connect failed'))
}

module.exports = { connect }