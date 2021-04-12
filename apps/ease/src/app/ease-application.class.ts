import { Injectable } from 'injection-js';
import { environment } from '../environments/environment';
import { ElectronApplication } from './electron/electron-application.class';
import { MainWindow } from './main-window.class';

@Injectable()
export class EaseApplication {
  constructor(private electronApplication: ElectronApplication, private mainWindow: MainWindow) {
    this.electronApplication.on('window-all-closed', () => this.onWindowAllClosed());
    this.electronApplication.on('ready', () => this.onReady());
    this.electronApplication.on('activate', () => this.onActivate());
  }

  public isDevelopmentMode() {
    const isEnvironmentSet: boolean = 'ELECTRON_IS_DEV' in process.env;
    const getFromEnvironment: boolean = parseInt(process.env.ELECTRON_IS_DEV, 10) === 1;

    return isEnvironmentSet ? getFromEnvironment : !environment.production;
  }

  private onWindowAllClosed(): void {
    if (process.platform !== 'darwin') {
      this.electronApplication.quit();
    }
  }

  private onReady() {
    this.mainWindow.show();
  }

  private onActivate() {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.

    if (this.mainWindow === null) {
      this.onReady();
    }
  }
}
