const $ = require('./$').value
const moment = require('moment')

module.exports = () => {
  return {
    client: $('client'),
    options: {
      state: $('state'),
      details: $('details'),
      largeImageText: $('largeImageText'),
      largeImageKey: $('largeImageKey'),
      smallImageText: $('smallImageText'),
      smallImageKey: $('smallImageKey'),
      startTimestamp: moment($('startTime'), 'YYYY-MM-DD HH:mm:ss').valueOf(),
      instance: true
    }
  }
}
