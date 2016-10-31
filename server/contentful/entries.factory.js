const client = require('./client')

class ContentfulEntries {
  constructor (contentType, include) {
    /* eslint-disable camelcase */
    this._query = {
      content_type: contentType,
      include: include || 10
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

module.exports = ContentfulEntries
