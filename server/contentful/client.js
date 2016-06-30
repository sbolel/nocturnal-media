'use strict'

const contentful = require('contentful')
const config = require('../config')

module.exports = contentful.createClient({
  space: process.env.contentful_space,
  accessToken: process.env.contentful_token,
  host: process.env.contentful_host,
})
