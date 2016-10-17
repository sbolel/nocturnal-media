'use strict'

const api = require('express').Router() // eslint-disable-line new-cap
const Renderer = require('./renderer')

const PortfolioSection = require('./contentful/portfolioSection')

api.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

api.get('/', (req, res) => {
  const render = new Renderer('app/views/index')

  const comedy = new PortfolioSection('dWhdMkQ0ww4KA4CKwwYsK')
  const commercial = new PortfolioSection('5xsvLEHRKgwMeYKmmUOG4I')
  const music = new PortfolioSection('666fSnypZ6EwSaoqCmCySe')

  Promise.all([comedy.promise, commercial.promise, music.promise])
    .then(data => {
      res.locals.data = {
        comedy: data[0],
        commercial: data[0],
        music: data[0]
      }
      render(res.locals)
        .then(html => res.send(html))
        .catch(err => res.send({status: 500, message: err}))
    })
    .catch(err => res.send({status: 500, message: err}))
})

module.exports = api
