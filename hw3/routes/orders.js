// Simon Martin
var express = require('express');
var router = express.Router();

// json data
let jsObject = [
    {topping: "cherry", quantity: "2"},
    {topping: "plain", quantity: "6"},
    {topping: "chocolate", quantity: "3"}
]

/* POST orders json object. */
router.post('/', function(req, res, next) {
    // create json object
    jsonObj = JSON.stringify(jsObject);
    // send json object
    res.send(jsonObj);
});

module.exports = router;