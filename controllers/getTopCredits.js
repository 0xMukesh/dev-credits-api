const devCredits = require("../model/model.js")

const getTopCredits = (req, res) => {
    devCredits.find().sort({ credits: -1 }).exec(function (err, data) {
        if (err) {
            res.send(err)
        }
        else {
            res.json(data)
        }
    });
}

module.exports = getTopCredits