const {
  app,
  BrowserWindow,
  ipcMain,
  shell,
  Menu,
  session
} = require("electron");

  const { isDev } = require('./env');

const windowStateKeeper = require("electron-window-state");

module.exports = function main() {
  //   const url =
  //   isDev && process.env.DEV_SERVER
  //     ? 'http://localhost:4000' // TODO: find a solution to use host and port based on make config.
  //     : 'file://' + path.join(__dirname, '..', 'dist', 'index.html');

  const url = "http://localhost:3000";

  // Keep a global reference of the window object, if you don't, the window will
  // be closed automatically when the JavaScript object is GCed.
  let mainWindow = null;

  const activateWindow = function() {
    // Only allow a single window
    // to be open at any given time
    if (mainWindow) {
      return;
    }

    const mainWindowState = windowStateKeeper({
      defaultWidth: 1024,
      defaultHeight: 768
    });

    mainWindow = new BrowserWindow({
      x: mainWindowState.x,
      y: mainWindowState.y,
      width: mainWindowState.width,
      height: mainWindowState.height,
      minWidth: 370,
      minHeight: 520,
      // icon: iconPath,
      titleBarStyle: "hidden",
      show: false,
      webPreferences: {
        nodeIntegration: true
        //   preload: path.join(__dirname, './preload.js'),
      }
    });

    // and load the index of the app.
    if (typeof mainWindow.loadURL === "function") {
      mainWindow.loadURL(url);
    } else {
      mainWindow.loadUrl(url);
    }

    // if (
    //   "test" !== process.env.NODE_ENV &&
    //   (isDev || process.argv.includes("--devtools"))
    // ) {
    //   mainWindow.openDevTools({ mode: "detach" });
    // }

    mainWindowState.manage(mainWindow);

    mainWindow.webContents.on("new-window", function(event, linkUrl) {
      event.preventDefault();
      shell.openExternal(linkUrl);
    });

    // Emitted when the window is closed.
    mainWindow.on("closed", function() {
      // Dereference the window object, usually you would store windows
      // in an array if your app supports multi windows, this is the time
      // when you should delete the corresponding element.
      mainWindow = null;
    });

    // wait until window is presentable
    mainWindow.once("ready-to-show", mainWindow.show);
  };

  const gotTheLock = app.requestSingleInstanceLock();

  app.on("second-instance", () => {
    // Someone tried to run a second instance, we should focus our window.
    if (mainWindow) {
      if (mainWindow.isMinimized()) {
        mainWindow.restore();
      }
      mainWindow.focus();
    }
  });

  if (!gotTheLock) {
    return app.quit();
  }

  // Quit when all windows are closed.
  app.on("window-all-closed", function() {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== "darwin") {
      app.quit();
    }
  });

  app.on("browser-window-created", function(event, window) {
    window.webContents.on("did-finish-load", () => {
      // Disable drag and drop operations on the window
      window.webContents.executeJavaScript(
        "document.addEventListener('dragover', event => event.preventDefault());"
      );
      window.webContents.executeJavaScript(
        "document.addEventListener('drop', event => event.preventDefault());"
      );
    });
  });

  // This method will be called when Electron has finished
  // initialization and is ready to create browser windows.
  app.on("ready", activateWindow);
  app.on("activate", activateWindow);
};
