#!/usr/bin/env node
var greet = require("greet");
var parseArgs = require('minimist')(process.argv.slice(2));
console.log(greet(process.argv[2], parseArgs.drunk));