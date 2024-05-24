const express = require('express');
const app = express();

const test = (req,res)=>{
    res.send("endpoint is working");
}

module.exports = {
    test
}