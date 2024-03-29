// Simon Martin
var express = require('express');
var router = express.Router();
const { dbquery } = require('./dbms.js')

// json data
/*let jsObject = [
    {topping: "cherry", quantity: "2"},
    {topping: "plain", quantity: "6"},
    {topping: "chocolate", quantity: "3"}
]*/

router.post('/', function(req, res, next) {
    const month = req.body.month
    const query = "SELECT QUANTITY, TOPPING FROM ORDERS WHERE MONTH='"+month+"'"

    dbquery(query, (error, results) => {
        if(error) {
            console.error("Query error:", error);
        } else {
            const orders = {}

            results.forEach(row => {
                if(Object.keys(orders).includes(row.TOPPING)) {
                    orders[row.TOPPING] += 1
                } else {
                    orders[row.TOPPING] = 1
                }
            })
            
            // Process the results here
            res.setHeader('Content-Type', 'application/json')
            res.json(orders);
        }
    });
});

module.exports = router;