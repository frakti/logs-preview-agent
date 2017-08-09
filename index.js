const through = require('through2')
const split = require('split')
const fetch = require('node-fetch')

process.stdin.pipe(split()).pipe(
  through(function (log, encoding, callback) {
    fetch('http://localhost:6543/log', {
      method: 'POST',
      body: log,
      headers: {
        'content-type': 'text/plain'
      }
    })

    this.push(log)
    this.push('\n')
    callback()
  }
)).pipe(process.stdout)
