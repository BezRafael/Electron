const { app, BrowserWindow, Menu, shell } = require('electron');

//Janela Principal
const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      icon: "./src/public/img/img_logo.svg" //Ícone do Executável
    });

    win.loadFile('./src/views/tela_inicial.html');
};



app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
});

app.whenReady().then(() => {
    createWindow()
  
    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
});

console.log("Iniciando Processos... Iniciado com Sucesso!!")