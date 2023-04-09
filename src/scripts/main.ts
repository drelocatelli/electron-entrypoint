const { app, BrowserWindow } = require('electron');
const path = require('path');


class App {
    constructor() {
        app.whenReady().then(() => {
            const win = this.init();
            win.maximize();
        });
    }

    init(): Electron.CrossProcessExports.BrowserWindow {
        const win = new BrowserWindow({
            webPreferences: {
                nodeIntegration: true,
            },
        });
        win.loadFile('./src/static/index.html');

        return win;
    }
}

new App();
