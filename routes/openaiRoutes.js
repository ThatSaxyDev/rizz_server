const express = require("express");

const { generateImage, summarizeText } = require("../controllers/openaiController");
const router = express.Router();

router.post("/generateimage", generateImage);
router.post('/summarizetext', summarizeText)

module.exports = router;
