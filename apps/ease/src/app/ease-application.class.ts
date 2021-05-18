import { Injectable } from 'injection-js';
import { ElectronApplication } from './electron/electron-application.class';
import { MainWindow } from './main-window.class';
import * as Logger from 'bunyan';

@Injectable()
export class EaseApplication {
  constructor(private electronApplication: ElectronApplication,
              private mainWindow: MainWindow,
              private logger: Logger) {

  }

  initialize(): void {
    this.electronApplication.on('ready', () => this.onReady());
    this.electronApplication.on('activate', () => this.onActivate());
    this.electronApplication.on('window-all-closed', () => this.onWindowAllClosed());
    this.electronApplication.on('quit', () => this.onQuit());
  }

  private onWindowAllClosed(): void {
    if (process.platform === 'darwin') {
      return;
    }

    this.electronApplication.quit();
  }

  private onReady(): void {
    this.mainWindow.show();
  }

  private onActivate(): void {
    // On macOS it is common the window is recreated when the dock icon is clicked and no other window open.
    if (this.mainWindow === null) {
      this.onReady();
    }
  }

  /**
   * NOTE: On Windows, this method is not called when the operating system is shutdown or restarted; or the user logs off.
   */
  private onQuit(): void {
    this.logger.info('The desktop application has ended.');
  }
}
