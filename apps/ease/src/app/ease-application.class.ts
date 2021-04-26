import { Environment } from '@ease/environment';
import { Injectable } from 'injection-js';
import { ElectronApplication } from './electron/electron-application.class';
import { MainWindow } from './main-window.class';

@Injectable()
export class EaseApplication {
  constructor(private electronApplication: ElectronApplication,
              private mainWindow: MainWindow) {
    this.electronApplication.on('ready', () => this.onReady());
    this.electronApplication.on('activate', () => this.onActivate());
    this.electronApplication.on('window-all-closed', () => this.onWindowAllClosed());
  }

  private onWindowAllClosed(): void {
    if (process.platform === 'darwin') {
      return;
    }

    this.electronApplication.quit();
  }

  private onReady() {
    this.mainWindow.show();
  }

  private onActivate() {
    // On macOS it is common the window is recreated when the dock icon is clicked and no other window open.
    if (this.mainWindow === null) {
      this.onReady();
    }
  }
}
