class Block {
    constructor(index, prevHash, timestamp, data, hash) {
        this.index = index;
        this.prevHash = prevHash;
        this.timestamp = timestamp;
        this.data = data;
        this.hash = hash
    }
}

module.exports = Block;