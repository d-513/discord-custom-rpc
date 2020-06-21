const $ = require('./$').elem
const moment = require('moment')

module.exports = (values) => {
  $('client').value = values.client || ''
  $('state').value = values.options.state || ''
  $('details').value = values.options.details || ''
  $('largeImageText').value = values.options.largeImageText || ''
  $('largeImageKey').value = values.options.largeImageKey || ''
  $('smallImageText').value = values.options.smallImageText || ''
  $('smallImageKey').value = values.options.smallImageKey || ''
  if (values.startTimestamp) {
    $('startTime').value = moment(values.startTimestamp).format(
      'YYYY-MM-DD HH:mm:ss'
    )
  }
}
