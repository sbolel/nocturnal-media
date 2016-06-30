'use strict'

const path = require('path')
const html = require('html')
const api = require('express').Router()

api.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

api.get('/', (req, res) => {
  res.render('index.html')
})

module.exports = api
