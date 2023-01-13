const nativefier = require('nativefier').default;
const packageJson = require('./package.json');

const options = {
  name: 'Google Calendar',
  targetUrl: 'https://calendar.google.com/calendar/',
  version: packageJson.version,
  out: './release/',
  overwrite: true,
  asar: false, // see conceal
  counter: true,
  bounce: false,
  width: 1280,
  height: 800,
  showMenuBar: true,
  // titleBarStyle: 'hiddenInset',
  // tray: 'start-in-tray',
  inject: ['./custom.css'],
  fastQuit: false,
  browserwindowOptions: {
    fullscreenable: true,
    simpleFullscreen: false,
  },
  ignoreCertificate: false,
  ignoreGpuBlacklist: false,
  enableEs3Apis: false,
  blockExternalUrls: true,
  insecure: false,
  zoom: 1,
  singleInstance: true,
  clearCache: false,
  fileDownloadOptions: {
    saveAs: true, // always show "Save As" dialog
  },
};

nativefier(options, (error, appPath) => {
  if (error) {
    console.error(error);
    return;
  }
  console.info('App has been nativefied to', appPath);
});
