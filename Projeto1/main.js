const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      icon: "./src/public/img/icon_hello.png"
    })
  
    win.loadFile('./src/views/index.html')
  }


  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })

  app.whenReady().then(() => {
    createWindow()
  
    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
  })








console.log("Iniciando Processos... Iniciado com Sucesso!!")