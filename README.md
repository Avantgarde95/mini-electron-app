# mini-electron-app

Super mini electron application

### Requirements
- [Node.js & npm](https://nodejs.org/)

### Structure
- "src/browser": 웹사이트 코드가 들어가 있습니다.
  - 웹 브라우저 밖과 관계가 없는 순수한 웹사이트이며, 웹 브라우저에서 "Page.html"을 열어서 웹사이트를 직접 실행할 수도 있습니다.
- "src/platform": 데스크톱 코드가 들어가 있습니다.
  - "Main.js": Electron이 내장시켜 주는 Chromium 브라우저를 열고 "Page.html"을 띄우는 단순한 코드입니다.

### How to run
-----

웹 브라우저에서 "src/browser/Page.html"을 직접 열어서 웹사이트 코드를 직접 실행해볼 수 있습니다.

![BrowserApp](https://raw.githubusercontent.com/Avantgarde95/mini-electron-app/master/image/BrowserApp.png)

-----

우선 `npm install`을 실행하여 필요한 라이브러리들을 설치해주세요. 아래의 라이브러리들이 설치됩니다.

**[Electron](https://www.electronjs.org/)**
  - Chromium과 Node.js를 이용하여 데스크톱 앱을 만들 수 있도록 하는 라이브러리입니다.
  - 사용자가 웹사이트 코드와 데스크톱 코드를 제공하면, 내장된 Chromium 브라우저를 이용하여 웹사이트를 띄워주고, 웹사이트 쪽과 데스크톱 쪽이 통신할 수 있도록 도구를 제공하여 웹사이트 쪽에서 컴퓨터에 간접적으로 접근할 수 있도록 해줍니다. (이를 한 세트로 묶으면 마치 하나의 데스크톱 앱처럼 동작하게 됩니다.)
  - 자세한 구조는 <https://velog.io/@ckstn0777/Electron-이해하기>를 참고해주세요.

**[electron-builder](https://github.com/electron-userland/electron-builder)**
  - Electron 실행 파일과 우리의 코드들을 한 세트로 묶어주는 도구입니다.

`npm run buildApp`을 실행하면 electron-builder가 웹사이트 코드를 가지고 데스크톱 앱과 설치 프로그램을 만들어줍니다. 인터넷에서 미리 빌드된 바이너리 파일들을 다운받고, 웹사이트, 데스크톱 코드, Chromium을 비틀어서 만든 무언가(?)를 묶어서 한 세트로 만들어줍니다.

![ElectronBuilder](https://raw.githubusercontent.com/Avantgarde95/mini-electron-app/master/image/ElectronBuilder.png)

"dist"의 "win-unpacked"폴더에 데스크톱 앱이 생성됩니다. "mini-electron-app.exe"을 실행하면 아래와 같이 데스크톱 앱이 실행됩니다.

![AppFiles](https://raw.githubusercontent.com/Avantgarde95/mini-electron-app/master/image/AppFiles.png)

![PlatformApp](https://raw.githubusercontent.com/Avantgarde95/mini-electron-app/master/image/PlatformApp.png)

"View" - "Toggle Developer Tools"를 눌러보면 아래와 같이 Chrome 디버거(Chrome에서 F12 키 누르면 나오는 것)가 나타납니다. 즉 우리의 데스크톱 앱이 내부적으로 Chrome(Chromium)을 사용한다는 것을 알 수 있습니다.

![BrowserDebugger](https://raw.githubusercontent.com/Avantgarde95/mini-electron-app/master/image/BrowserDebugger.png)

"resources" 폴더를 들어가 보면 웹사이트 코드 및 데스크톱 코드가 복사되어 있음을 알 수 있습니다. ("package.json"에서 데스크톱 앱에 첨부할 폴더나 파일들을 지정해줄 수 있습니다.)

![PackedFiles](https://raw.githubusercontent.com/Avantgarde95/mini-electron-app/master/image/PackedFiles.png)

만약 "package.json"에서 `"asar": false`를 `"asar": true`로 수정하고 다시 `npm run buildApp`을 실행하면, electron-builder가 아래와 같이 코드들을 한 덩어리로 뭉쳐서 한 파일("app.asar")로 만들어줍니다.

![AsarFile](https://raw.githubusercontent.com/Avantgarde95/mini-electron-app/master/image/AsarFile.png)

"win-unpacked"에는 실행에 필요한 모든 파일들이 들어가 있습니다. 이 폴더를 아무 곳에나 복사해도 .exe가 잘 실행됩니다.

-----

`npm run debugApp`을 실행하면 빌드 과정을 거치지 않고 데스크톱 앱을 바로 실행해볼 수 있습니다.
