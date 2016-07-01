'use strict'

const ContentfulEntry = require('./entry.factory');

class PortfolioSection {
  constructor(id) {
    this._promise = new ContentfulEntry(id, 'portfolio')
  }
  get promise () {
    return this._promise
  }
}

module.exports = PortfolioSection;
