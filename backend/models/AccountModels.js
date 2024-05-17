const mongoose = require('mongoose');
const Schema = mongoose.Schema
const bcrypt = require('bcrypt');

const userSchema = new Schema({
  name: { type: String,  },
  role: { type: String, enum: ['student', 'faculty', 'staff', "admin"], required: true },
  position: String,
  course: String,
  year: String,
  schoolyear: String,
  semestertype: String,
  address: String,
  contactnumber: String,
  birthdate: Date,
  gender: { type: String, enum: ['Male', 'Female', 'Other'] },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true }
});


module.exports = mongoose.model('Account', userSchema);


