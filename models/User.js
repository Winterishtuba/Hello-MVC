const mongoose = require('mongoose');

const userSchema = new mongoose.Schema ({
    id: Number,
  name: String,
  mail: String,
  birthday: Date
})

const user = mongoose.model('user', userSchema);

module.exports = user;  