// eslint-disable-next-line global-require
if (process.env.NODE_ENV !== 'production' && !process.env.CI) require('dotenv').config()

const NODE_ENV = process.env.NODE_ENV
const config = {
  log: {}
}

if (NODE_ENV === 'development') {
  config.log.consoleLevel = 'debug'
  config.log.logentriesLevel = 'debug'
} else if (NODE_ENV === 'production' || NODE_ENV === 'staging') {
  config.log.consoleLevel = 'info'
  config.log.logentriesLevel = 'info'
} else if (NODE_ENV === 'test') {
  config.log.consoleLevel = 'error'
  config.log.logentriesLevel = 'error'
} else {
  throw new Error('NODE_ENV set to invalid value. Exiting.')
}

module.exports = config
