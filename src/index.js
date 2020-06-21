const moment = require('moment')
const electron = require('electron')
const { ipcRenderer } = electron
const { dialog } = electron.remote
const fs = require('fs-extra')
const getValues = require('./function/getValues')
const setValues = require('./function/setValues')
const filter = { name: 'Rich Presence', extensions: ['discordrpc'] }

const startTime = document.getElementById('startTime')
startTime.value = moment().format('YYYY-MM-DD HH:mm:ss')

document.getElementById('use').addEventListener('click', () => {
  ipcRenderer.send('rpc', getValues())
})
document.getElementById('save').addEventListener('click', async () => {
  const path = await dialog.showSaveDialog(null, {
    filters: [filter]
  })
  if (path.canceled) return
  await fs.writeJSON(path.filePath, getValues())
})
document.getElementById('load').addEventListener('click', async () => {
  const path = await dialog.showOpenDialog(null, {
    filters: [filter]
  })
  if (path.canceled) return
  const json = await fs.readJSON(path.filePaths[0])
  setValues(json)
})
ipcRenderer.on('error', (ignore, err) => {
  err = err || 'Unknown error.'
  document.querySelector('.error').textContent = err
})
ipcRenderer.on('connected', () => {
  document.getElementById('client').setAttribute('disabled', true)
})
