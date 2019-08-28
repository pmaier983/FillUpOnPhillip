const mongoose = require("mongoose")

const Schema = mongoose.Schema

const userSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      minlength: 3
    },
    email: {
      type: String
    },
    note: {
      type: String
    }
  },
  {
    timestamps: true
  }
)

const User = mongoose.model("User", userSchema)

module.exports = User
