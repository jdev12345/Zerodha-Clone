const { userSchema } = require('../Schema/UserSchema') 
const { model } = require('mongoose') 

  const userModel = new model("User", userSchema) 
  
  module.exports = userModel;