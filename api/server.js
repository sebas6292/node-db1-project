const express = require("express");

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.status(404).json({
        message: 'not found'
    })
})

module.exports = server;
