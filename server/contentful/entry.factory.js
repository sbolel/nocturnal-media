'use strict'

const client = require('./client')
const log = require('../logger')

class ContentfulEntry {
  constructor (id, contentType, include, limit) {
    this._sys = {
      id: id,
      contentType: {
        sys: {
          id: contentType
        }
      }
    }
    this._query = {
      content_type: contentType,
      include: 10,
      limit: 1,
      'sys.id': id
    }
    this._loaded = client.getEntries(this._query)
      .then((entries) => {
        log.info(' ===> Loaded entries.')
      })
      .catch((err) => log.error(err))
  }
  get query () {
    return this._query
  }
  loaded () {
    return this._loaded
  }

}

module.exports = ContentfulEntry
