"use strict";

let datafire = require('datafire');

module.exports = new datafire.Action({
  inputs: [{
    title: 'name',
    type: 'string',
    default: 'world',
  }],
  handler: (input, context) => {
    return "Hello, " + input.name;
  }
})
