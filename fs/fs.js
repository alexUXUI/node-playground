var fs = require("fs")
var data = fs.readFileSync('./input.txt')
var csvIterator = require('csv-iterator')
var iterator = csvIterator.fromFile('input.csv', {from: 10, to: 20})
var csv =

// Asynchronous read
fs.readFile('./input.txt', (err, data) => {
if (err) return console.error(err)
  console.log("Asynchronous read: " + data.toString())
})

// Synchronous read
console.log("Synchronous read: " + data.toString())
