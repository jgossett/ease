import { app, ipcMain } from 'electron';

export default class ElectronEvents {
  static bootstrapElectronEvents(): Electron.IpcMain {
    return ipcMain;
  }
}

// Retrieve app version
// eslint-disable-next-line @typescript-eslint/no-unused-vars
ipcMain.handle('get-app-version', (event) => {
  // TODO: Implement.
  // console.log(`Fetching application version... [v${environment.version}]`);

  // return environment.version;
  return '0.1.0';
});

ipcMain.on('quit', (event, code) => {
  app.exit(code);
});
