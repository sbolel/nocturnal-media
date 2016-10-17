const express = require('express')
const engines = require('consolidate')
const path = require('path')
const api = require('./api')
const log = require('./logger')
const pkg = require('../package.json')

const app = express()

app.enable('trust proxy')

app.engine('html', engines.hogan)

if (process.env.NODE_ENV === 'test') {
  app.set('port', 4001)
} else {
  app.set('port', process.env.PORT || 4000)
}

// views
app.set('views', path.resolve(__dirname, '../app'))
app.set('view engine', 'html')

app.locals = {
  pkg
}

// static assets
app.use('/fonts', express.static(path.resolve(__dirname, '../app/assets/fonts')))
app.use('/assets/img', express.static(path.resolve(__dirname, '../app/assets/img')))
app.use('/dist', express.static(path.resolve(__dirname, '../app/dist')))
app.use('/favicon.ico', express.static(path.resolve(__dirname, '../app/assets/img/favicon.ico')))

// use api
app.use(api)

// init server
const server = app.listen(app.get('port'), () => {
  log.info(`Express server listening on port ${server.address().port}`)
})

module.exports = server
