const express = require('express')
const engines = require('consolidate')
const path = require('path')
const api = require('./api')
const log = require('./logger')

// create express app
const app = express()

app.enable('trust proxy')

// render engine
app.engine('html', engines.hogan)

// set port
if (process.env.NODE_ENV === 'test') {
  app.set('port', 4001)
} else {
  app.set('port', process.env.PORT || 4000)
}

// views
app.set('views', path.resolve(__dirname, '../app'))
app.set('view engine', 'html')

// static assets
app.use('/assets/img', express.static(path.resolve(__dirname, '../app/assets/img')))
app.use('/assets/js', express.static(path.resolve(__dirname, '../app/assets/js')))
app.use('/dist', express.static(path.resolve(__dirname, '../app/dist')))
app.use('/favicon.png', express.static(path.resolve(__dirname, '../app/assets/img/favicon.png')))
app.use('/fonts', express.static(path.resolve(__dirname, '../app/assets/fonts')))

// use api
app.use(api)

// initialize server
const server = app.listen(app.get('port'), () => {
  log.info(`Express server started on http://localhost:${server.address().port}`)
})

// export server application
module.exports = server
