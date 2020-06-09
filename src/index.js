import moment from 'moment'
const startTime = document.getElementById('startTime')
startTime.value = moment().format('YYYY-MM-DD HH:mm:ss')

const $ = (id) => {
  const elem = document.getElementById(id)
  if (elem.value) return elem.value
}
document.getElementById('use').addEventListener('click', () => {
  window.ipcRenderer.send('rpc', {
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
  })
})
