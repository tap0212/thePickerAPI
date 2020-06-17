const express = require("express")
const router = express.Router()

const {createColor, getAllColors} = require("../Controllers/color")


router.post("/create", createColor)
router.get("/get", getAllColors)

module.exports = router