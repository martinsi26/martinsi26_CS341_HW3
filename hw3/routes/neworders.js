// Simon Martin
var express = require('express');
var router = express.Router();
const { dbquery } = require('./dbms.js')

var x = 0

router.post('/', function(req, res, next) {
    const quantity = req.body.quantity
    const toppings = req.body.toppings
    const notes = req.body.notes
    x++
    const query = "INSERT * FROM ORDERS WHERE QUANTITY='"+quantity+"'TOPPING='"+toppings+"'NOTES='"+notes+"'MONTH='FEB' ORDERID='"+x+"'DAY='23rd'"

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