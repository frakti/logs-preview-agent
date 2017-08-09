const through = require('through2')
const split = require('split')
const fetch = require('node-fetch')

process.stdin.pipe(split()).pipe(
  through(function (log, encoding, callback) {
    fetch('http://localhost:6543/log', {
      method: 'POST',
      body: JSON.stringify({
        at: new Date().toISOString(),
        log: log.toString()
      }),
      headers: {
        'content-type': 'application/json'
      }
    })

    this.push(log)
    this.push('\n')
    callback()
  }
)).pipe(process.stdout)
