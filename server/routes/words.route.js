const express = require('express');
const wordsRoutes = express.Router();

let Words = require('../models/word');

/**
 * Route to update the database on word occurence frequency
 */
wordsRoutes.route('/add').post(function (req, res) {
    const words = req.body.words.toLowerCase().trim().split(" ");
    for (var i = 0; i < words.length; i++) {
        const word = words[i];
        Words.findOneAndUpdate({ word }, {
            $inc: {
                count: 1
            }
        }, {
                upsert: true,
                new: true
            }).exec().then(() => {
                if (word === words[words.length - 1])
                    res.status(200).json({ 'words': 'words count is added successfully' });
            }).catch(err => {
                console.log('error catch ', err);
                res.status(400).send("unable to save to database");
            });
    }
});

/**
 * Route to get the words occurences
 */
wordsRoutes.route('/').get(function (req, res) {
    Words.find().collation({ locale: 'en' }).sort({ word: 1 }).then((wordCounts) => {
        res.json(wordCounts);
    }).catch(error => res.status(500).send(JSON.stringify('Error getting data ', error)));
});


module.exports = wordsRoutes;