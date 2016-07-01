'use strict'

const contentful = require('contentful')
const config = require('../config')

module.exports = contentful.createClient({
  space: config.contentful_space,
  accessToken: config.contentful_token,
  host: config.contentful_host
})
