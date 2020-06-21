const { app, BrowserWindow, ipcMain } = require('electron')
if (require('electron-squirrel-startup')) process.exit(0)
const path = require('path')
const rpc = require('discord-rich-presence')
let client

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    },
    icon: path.join(__dirname, 'Discord-Logo-Color.ico')
  })
  win.loadFile(path.join(__dirname, 'index.html'))
  win.setMenu(null)
  ipcMain.on('rpc', (ignore, args) => {
    if (!client) client = rpc(args.client)
    client.on('error', (err) => win.webContents.send('error', err))
    client.on('connected', () => win.webContents.send('connected'))
    setTimeout(() => {
      client.updatePresence(args.options)
    }, 500)
  })
  ipcMain.on('app_quit', () => {
    app.quit()
  })
}

app.whenReady().then(createWindow)
