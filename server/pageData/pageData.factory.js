const log = require('../logger')
const ContentfulEntry = require('../contentful').Entry

class PageData {
  constructor () {
    this.data = {
      slideshow: {},
      portfolio: {}
    }

    this.entries = {
      slideshow: new ContentfulEntry('5WFPPFLDPi06aM4eEM6CEk', 'slideshow'),
      comedy: new ContentfulEntry('dWhdMkQ0ww4KA4CKwwYsK', 'portfolio'),
      commercial: new ContentfulEntry('5xsvLEHRKgwMeYKmmUOG4I', 'portfolio'),
      musicVideo: new ContentfulEntry('666fSnypZ6EwSaoqCmCySe', 'portfolio')
    }

    this.promise = () => Promise.all([
      this.entries.slideshow.get(),
      this.entries.comedy.get(),
      this.entries.commercial.get(),
      this.entries.musicVideo.get()
    ]).catch(err => log.error(err))
  }

  loaded () {
    return this.promise().then(data => {
      this.data.slideshow = data[0].items[0].fields.images.map(item =>
        item.fields.file.url)
      return this.data
    })
  }
}

module.exports = PageData
