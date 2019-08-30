const mongoose = require("mongoose")

const Schema = mongoose.Schema

const visitorSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      minlength: 3
    },
    email: {
      type: String,
      trim: true,
      minlength: 5
    },
    note: {
      type: String
    }
  },
  {
    timestamps: true
  }
)

const Visitor = mongoose.model("Visitor", visitorSchema)

module.exports = Visitor
