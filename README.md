# mini-electron-app

Super mini electron application

### Requirements
- [nodejs & npm](https://nodejs.org/)

### How to run
- Install the libraries (including Electron) by running `npm install`.
- Open "src/browser/Page.html" on your web browser to run the website code directly.
- Run `npm run debugApp` to run the application immediately.
- Run `npm run buildApp` to build the application.
  - Electron will generate a **standalone desktop application** and its **installer** in "dist" folder.
  - Run "mini-electron-app.exe" inside "win-unpacked" to run the application.
  - In "resources" folder, you can see that **our code is packed** in the application.
  - Copy "win-unpacked" folder to anywhere you want and run the .exe file. It may run well.

### Structure
- `src/browser`: Website code
- `src/platform`: Platform code
