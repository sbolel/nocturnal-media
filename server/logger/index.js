'use strict'

const winston = require('winston')
const config = require('../config')

const logLevels = {
  levels: {
    error  : 0,
    warn   : 1,
    info   : 2,
    verbose: 3,
    debug  : 4,
    silly  : 5
  },
  colors: {
    error  : 'red',
    warn   : 'yellow',
    info   : 'cyan',
    verbose: 'black',
    debug  : 'green',
    silly  : 'black'
  }
}

winston.setLevels(logLevels.levels)
winston.addColors(logLevels.colors)

winston.remove(winston.transports.Console)

winston.add(winston.transports.Console, {
  colorize   : true,
  level      : config.log.consoleLevel,
  prettyPrint: true,
  timestamp  : true
})

winston.handleExceptions(
  new winston.transports.Console({
    colorize   : true,
    prettyPrint: true,
    timestamp  : true
  })
)

if (process.env.LOGENTRIES_TOKEN) {
  winston.add(winston.transports.Logentries, {
    token: process.env.LOGENTRIES_TOKEN,
    level: config.log.logentriesLevel,
    json : true
  })
  winston.handleExceptions(
    new winston.transports.Logentries({
      token: process.env.LOGENTRIES_TOKEN,
      json : true
    })
  )
}

winston.exitOnError = false

winston.info('logger initialized.')

module.exports = winston
