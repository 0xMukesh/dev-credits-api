const devCredits = require("../model/model.js")

const postCredits = (req, res) => {
    const credit = new devCredits({
        id: req.body.id,
        credits: req.body.credits
    })

    devCredits.countDocuments({ id: req.body.id }, function (err, count) {
        if (count > 0) {
            devCredits.findOneAndUpdate(
                { id: req.body.id },
                {
                    $set: {
                        credits: credits + req.body.credits
                    },
                },
                { new: true },
                (err, devCredit) => {
                    if (err) {
                        res.send(err);
                    } else res.json(devCredit);
                }
            );
        }
        else {
            credit.save((err, image) => {
                if (err) {
                    res.send(err)
                }
                res.json(image)
            })
        }
    });
}

module.exports = postCredits