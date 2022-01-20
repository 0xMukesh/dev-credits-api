const devCredits = require("../model/model.js")

const postCredits = (req, res) => {
    const credit = new devCredits({
        id: req.body.id,
        credits: req.body.credits
    })

    credit.save((err, image) => {
        if (err) {
            res.send(err)
        }
        res.json(image)
    })
}

module.exports = postCredits