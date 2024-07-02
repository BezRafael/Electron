
//
const { app, BrowserWindow, Menu, shell } = require('electron')


//Janela Principal
const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      icon: "./src/public/img/icon_hello.png", //Ícone do Executável
    })

    //Menu personalizado
  Menu.setApplicationMenu(Menu.buildFromTemplate(template))
  
    win.loadFile('./src/views/index.html')
  }


//Janela Sobre
const aboutWindow = () => {
  const janelaPrincipal = BrowserWindow.getFocusedWindow()
  if (janelaPrincipal) {
    const about = new BrowserWindow({
      width: 360,
      heigth: 220,
      icon: "./src/public/img/icon_hello.png",
      autoHideMenuBar: true, //Esconder o menu
      resizable: false, //redimensionamento
      parent: janelaPrincipal,
      modal: true
    })
    about.loadFile('./src/views/sobre.html')
  }
}


//
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })


//Template do Menu
const template = [
  {
    label: 'Arquivo',
    submenu: [
      {
        label: 'Sair',
        click: () => app.quit(),
        accelerator: 'Alt+F4'
      }
    ]
  },
  {
    label: 'Exibir',
    submenu: [
      {
        label: 'Recarregar',
        role: 'reload'
      },
      {
        type: 'separator'
      },
      {
        label: 'Ferramentas do Desenvolvedor',
        role: 'toggleDevTools'
      }
    ]
  },
  {
    label: 'Ajuda',
    submenu: [
      {
        label: 'Docs',
        click: () => shell.openExternal('https://www.electronjs.org/pt/docs/latest/'),
      },
      {
        type: 'separator'
      },
      {
        label: 'Sobre',
        click: () => aboutWindow()
      }
    ]
  }
]


//
  app.whenReady().then(() => {
    createWindow()
  
    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
  })

console.log("Iniciando Processos... Iniciado com Sucesso!!")