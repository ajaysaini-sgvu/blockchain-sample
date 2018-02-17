var Block = require("./block");

const getDefaultBlock = () => {
    return new Block(0, "0", 1434234234, "default block", "cda1932c140339b03cd81a822277cadd9bcf611c6af918f392ca83dd9732f685");
}

var blockchain = [getDefaultBlock()];

const getBlockChains = () => {
    return blockchain;
}

module.exports = { getBlockChains, getDefaultBlock }