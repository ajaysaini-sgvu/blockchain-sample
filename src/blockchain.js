var Block = require("./block");
var CryptoJS = require("crypto-js");

const getDefaultBlock = () => {
    return new Block(0, "0", 1434234234, "default block", "cda1932c140339b03cd81a822277cadd9bcf611c6af918f392ca83dd9732f685");
}

var blockchain = [getDefaultBlock()];

const getBlockChains = () => {
    return blockchain;
}

const generateHash = (index, data, timestamp, prevHash) => {
    return CryptoJS.SHA256(index + data + timestamp + prevHash);
}

const addNewBlock = (block) => {
    // check if block is valid. If it is valid then push it into an array
    if (isNewBlockValid, getLastBlock()) {
        blockchain.push(block);
    }
}

const isNewBlockValid = (block, lastBlock) => {
    if ((block.index + 1) != lastBlock.index) {
        console.log("Invalid Index");
        return false;
    } else if (block.prevHash != lastBlock.hash) {
        console.log("Invalid previous hash");
        return false;
    } else if (validateHash(block) != block.hash) {
        console.log("Invalid current block hash");
        return false;
    }
    return true;
}

const validateHash = (block) => {
    return generateHash(block.index, block.data, block.timestamp, block.prevHash);
}

const getLastBlock = () => {
    return blockchain[blockchain.length - 1];
}

module.exports = { getBlockChains }