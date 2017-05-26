var express = require('express');

var router = express.Router();

router.get('/', function(req, res){
    res.render('index', {});
});

// export ide da bi require radio 
module.exports = router;