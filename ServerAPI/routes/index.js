var express = require('express');
var router = express.Router();
var sbj = require('../Models/function/Subject')
var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false })
router.use(bodyParser.urlencoded({ extended: false }))

module.exports = router;

router.get('/danhsach', (req, res, next) => {
    async() => {
        sbj.getAllSubject((err, rows) => {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    }
})