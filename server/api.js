const api = require('express').Router() // eslint-disable-line new-cap
const Renderer = require('./renderer')
const log = require('./logger')

const ContentfulEntry = require('./contentful').Entry

api.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

api.get('/', (req, res) => {
  const render = new Renderer('app/views/index')
  getContentfulData()
    .then(data => {
      res.locals.data = data
      return render(res.locals)
    })
    .then(html => res.send(html))
    .catch(err => res.send({status: 500, message: err}))
})

function getContentfulData () {
  const slideshow = new ContentfulEntry('5WFPPFLDPi06aM4eEM6CEk', 'slideshow')
  const comedy = new ContentfulEntry('dWhdMkQ0ww4KA4CKwwYsK', 'portfolio')
  const commercial = new ContentfulEntry('5xsvLEHRKgwMeYKmmUOG4I', 'portfolio')  // comercial
  const musicVideo = new ContentfulEntry('666fSnypZ6EwSaoqCmCySe', 'portfolio')  // music video
  return Promise.all([slideshow.get(), comedy.get(), commercial.get(), musicVideo.get()])
    .then(data => data)
    .catch(err => log.error(err))
}

module.exports = api
