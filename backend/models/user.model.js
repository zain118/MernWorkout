const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  age : {
      type : Number
  }
}, {
  timestamps: true,
});

const User = mongoose.model('user', userSchema);

module.exports = User;