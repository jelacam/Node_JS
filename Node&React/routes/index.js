var express = require('express');

var router = express.Router();

router.get('/', function(req, res){
    res.render('index', {name: 'MJ'});  //name:'MJ' - this.props.name
});

// export ide da bi require radio 
module.exports = router;