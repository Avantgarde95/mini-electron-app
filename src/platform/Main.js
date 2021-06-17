const { app, BrowserWindow } = require('electron');

app.on('ready', () => {
    const win = new BrowserWindow();
    win.loadFile(`${app.getAppPath()}/src/browser/Page.html`);
});
