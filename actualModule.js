// actualModule.js
const { calledFunction } = require('./calledModule');

function actualFunction() {
    return calledFunction(); // calling calledFunction from another module
}

module.exports = { actualFunction };
