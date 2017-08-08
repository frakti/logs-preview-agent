const through = require('through2')

process.stdin.pipe(
  through(function (chunk, encoding, callback) {
    console.info('-----')
    this.push(chunk)
    callback()
  }
)).pipe(process.stdout)
