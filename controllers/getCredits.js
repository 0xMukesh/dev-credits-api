const devCredits = require("../model/model.js")

const getCredits = (req, res) => {
    devCredits.find({ id: req.params.id }, { _id: 0, __v: 0 }, (err, data) => {
        if (err) {
            res.json(err)
        }
        res.json(data)
    })
}

module.exports = getCredits