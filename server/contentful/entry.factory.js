const client = require('./client')

class ContentfulEntry {
  constructor (id, contentType, include, limit) {
    /* eslint-disable camelcase */
    this._query = {
      content_type: contentType,
      include: include || 10,
      limit: limit || 1,
      'sys.id': id
    }
    /* eslint-enable camelcase */
  }
  get query () {
    return this._query
  }
  get () {
    return client.getEntries(this._query)
  }
}

module.exports = ContentfulEntry
