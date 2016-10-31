const log = require('../logger')
const ContentfulEntry = require('../contentful').Entry
const ContentfulEntries = require('../contentful').Entries

class PortfolioData {
  constructor (fields) {
    if (typeof fields === 'undefined' || !fields) return null
    this.data = {
      client: fields.client || '',
      file: `https:${fields.image.fields.file.url}`,
      title: fields.title || '',
      videoUrl: fields.vimeoUrl || '',
      hover: false,
      divClass: '{"saturate": img.hover, "desaturate":  !img.hover}'
    }
    return this.data
  }
}

class SpotlightData {
  constructor (fields) {
    log.debug(fields)
    if (typeof fields === 'undefined' || !fields) return null

    const imageUrls = fields.images.map(imageItem => {
      if (typeof imageItem.fields.file === 'undefined' || !imageItem.fields.file) return null
      return Object.assign({}, {
        divClass: '{"saturate": img.hover, "desaturate":  !img.hover}',
        file: `https:${imageItem.fields.file.url}`,
        hover: false
      })
    })

    this.data = {
      client: fields.client || '',
      images: imageUrls,
      links: fields.links,
      order: fields.order,
      title: fields.title || '',
      titleLink: fields.titleLink,
      subtitle: fields.subtitle || ''
    }
    return this.data
  }
}

class PageData {
  constructor () {
    this.data = {
      slideshow: {},
      spotlight: {},
      portfolio: {}
    }

    this.entries = {
      slideshow: new ContentfulEntry('5WFPPFLDPi06aM4eEM6CEk', 'slideshow'),
      comedy: new ContentfulEntry('dWhdMkQ0ww4KA4CKwwYsK', 'portfolio'),
      commercial: new ContentfulEntry('5xsvLEHRKgwMeYKmmUOG4I', 'portfolio'),
      documentary: new ContentfulEntry('2r2Qxng8xaKyqmS4A88coY', 'portfolio'),
      musicVideo: new ContentfulEntry('666fSnypZ6EwSaoqCmCySe', 'portfolio'),
      sports: new ContentfulEntry('wNn6w0U1qKCY46U06kYKw', 'portfolio'),
      spotlight: new ContentfulEntries('spotlight')
    }

    this.promise = () => Promise.all([
      this.entries.slideshow.get(),
      this.entries.comedy.get(),
      this.entries.commercial.get(),
      this.entries.documentary.get(),
      this.entries.musicVideo.get(),
      this.entries.sports.get(),
      this.entries.spotlight.get()
    ]).catch(err => log.error(err))
  }

  loaded () {
    return this.promise().then(data => {
      this.data.slideshow = data[0].items[0].fields.images.map(item => item.fields.file.url)
      this.data.spotlight = data[6].items.map(item => new SpotlightData(item.fields))
      this.data.portfolio = {
        comedy: data[1].items[0].fields.videos.map(item => new PortfolioData(item.fields)),
        commercial: data[2].items[0].fields.videos.map(item => new PortfolioData(item.fields)),
        documentary: data[3].items[0].fields.videos.map(item => new PortfolioData(item.fields)),
        musicVideo: data[4].items[0].fields.videos.map(item => new PortfolioData(item.fields)),
        sports: data[5].items[0].fields.videos.map(item => new PortfolioData(item.fields))
      }
      return this.data
    })
    .catch(err => log.error(err))
  }
}

module.exports = PageData
