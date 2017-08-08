const through = require('through2')
const split = require('split')

process.stdin.pipe(split()).pipe(
  through(function (chunk, encoding, callback) {
    console.info('-----')
    this.push(chunk)
    callback()
  }
)).pipe(process.stdout)
