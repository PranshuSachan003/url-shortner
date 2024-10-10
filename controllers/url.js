const urlModel = require('../models/url')
const shortid = require('shortid');

async function shortUrlGenerator(req, res) {
    const body = req.body;
    console.log("body is ", body)
    if(! body.url) return res.status(400).json({"err" : " in-valid body"})
    //const shortId = shortid.generate()
    const shortId = shortid()
    await urlModel.create({
        shortId : shortId,
        longId : body.url,
        totatClicks : 1
    })

    return res.json({ id : shortId})
}

async function visitUrl(req, res) {
    const shortId = req.params.shortid
    console.log("short id is ", shortId)
   const entry = await urlModel.findOneAndUpdate({
        shortId
    }, { $inc : {totatClicks : 1}})
    console.log("entry is ", entry)
    res.redirect(entry.longId)
}

async function ClickCount(req, res) {
    const shortId = req.params.shortid
    const entry = await urlModel.findOne({shortId})
    console.log("entry is ", entry)
    res.status(200).json({"click count is ": entry.totatClicks})
}

module.exports = {shortUrlGenerator, visitUrl, ClickCount}