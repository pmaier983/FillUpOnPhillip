const router = require("express").Router()
let Visitor = require("../models/visitor.model")

router.route("/").get((req, res) => {
  Visitor.find()
    .then(visitors => res.json(visitors))
    .catch(err => res.status(400).json("Error: " + err))
})

router.route("/add").post((req, res) => {
  const name = req.body.name
  const email = req.body.email
  const note = req.body.note
  const newVisitor = new Visitor({ name, email, note })

  newVisitor
    .save()
    .then(() => res.json("Visitor added!"))
    .catch(err => res.status(400).json("Error: " + err))
})

module.exports = router
