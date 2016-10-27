const log = require('../logger')
const ContentfulEntry = require('../contentful').Entry

class PortfolioData {
  constructor (fields) {
    this.data = {
      client: fields.client,
      file: `https:${fields.image.fields.file.url}`,
      title: fields.title,
      videoUrl: fields.vimeoUrl,
      hover: false,
      divClass: '{"saturate": img.hover, "desaturate":  !img.hover}'
    }
    return this.data
  }
}

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
      documentary: new ContentfulEntry('2r2Qxng8xaKyqmS4A88coY', 'portfolio'),
      musicVideo: new ContentfulEntry('666fSnypZ6EwSaoqCmCySe', 'portfolio'),
      sports: new ContentfulEntry('wNn6w0U1qKCY46U06kYKw', 'portfolio')
    }

    this.promise = () => Promise.all([
      this.entries.slideshow.get(),
      this.entries.comedy.get(),
      this.entries.commercial.get(),
      this.entries.documentary.get(),
      this.entries.musicVideo.get(),
      this.entries.sports.get()
    ]).catch(err => log.error(err))
  }

  loaded () {
    return this.promise().then(data => {
      this.data.slideshow = data[0].items[0].fields.images.map(item => item.fields.file.url)
      this.data.portfolio = {
        comedy: data[1].items[0].fields.videos.map(item => new PortfolioData(item.fields)),
        commercial: data[2].items[0].fields.videos.map(item => new PortfolioData(item.fields)),
        documentary: data[3].items[0].fields.videos.map(item => new PortfolioData(item.fields)),
        musicVideo: data[4].items[0].fields.videos.map(item => new PortfolioData(item.fields)),
        sports: data[5].items[0].fields.videos.map(item => new PortfolioData(item.fields))
      }
      return this.data
    })
  }
}

module.exports = PageData
