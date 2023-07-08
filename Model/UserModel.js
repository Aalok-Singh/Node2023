const mongoose = require("mongoose");



const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    default: 0,
  },
  email: {
    type: String,
    unique: true // `email` must be unique
  },
  gender: String,
});


UserSchema.virtual('user_profile',{
  ref: 'Profile',
  localField: '_id',
  foreignField: 'user_id'
});

UserSchema.set('toObject', { virtuals: true });
UserSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('User', UserSchema);
