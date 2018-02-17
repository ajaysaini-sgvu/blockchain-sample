var express = require('express');
var router = express.Router();
var blockchain = require("../blockchain");

router.get('/', function(req, res, next) {
    const blocks = blockchain.getBlockChains();
    res.send(JSON.stringify(blocks));
});

module.exports = router;
