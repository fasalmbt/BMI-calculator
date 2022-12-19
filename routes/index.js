var express = require('express');
var router = express.Router();
var math = require('math')

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'BMI calculator' });
});

router.post('/', (req, res) => {
    weight = req.body.weight
    height = req.body.height
    height = math.pow(height, 2)
    result = (weight / height) * 10000
    if (result <= 18.4) {
        message = "You're underweight. Eat something."
    } else if (result >= 18.5 && result <= 24.9) {
        message = "You're normal. Keep it up."
    } else if (result >= 25 && result <= 29.9) {
        message = "You're overweight, excercise more"
    } else {
        message = "You are obese, sweat more, work hard."
    }
    res.render('index', { title: 'BMI calculator', result, message })
})

module.exports = router;