const express = require("express")
const router = express.Router();
const {shortUrlGenerator, visitUrl, ClickCount} = require('../controllers/url')

router.post('/generateShortUrl', shortUrlGenerator)
router.get('/:shortid', visitUrl)
router.get('/analytics/:shortid', ClickCount)

module.exports = router;