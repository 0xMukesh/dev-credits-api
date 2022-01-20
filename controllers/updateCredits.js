const devCredits = require("../model/model.js")

const updateCredits = (req, res) => {
    devCredits.findOneAndUpdate(
        { id: req.body.id },
        {
            $set: {
                credits: req.body.credits
            },
        },
        { new: true },
        (err, devCredit) => {
            if (err) {
                res.send(err);
            } else res.json(devCredit);
        }
    );
};

module.exports = updateCredits