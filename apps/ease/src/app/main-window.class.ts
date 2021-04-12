import { BrowserWindow, screen } from 'electron';
import { Injectable } from 'injection-js';
import { join } from 'path';
import { rendererAppName, rendererAppPort } from './constants';
import { ElectronApplication } from './electron/electron-application.class';

@Injectable()
export class MainWindow {
  private readonly preloadPath = join(__dirname, 'preload.js');
  private browserWindow: BrowserWindow;

  constructor(private electronApplication: ElectronApplication) {
  }

  async show(): Promise<void> {
    this.browserWindow = this.createBrowserWindow();
    this.browserWindow.on('close', () => this.onClose());
    this.browserWindow.on('ready-to-show', () => this.onReadyToShow());
    await this.navigate();
  }

  async hide(): Promise<void> {
    this.browserWindow = null;
  }

  private onClose(): void {
    this.browserWindow = undefined;
    this.electronApplication.exit(0);
  }

  private onReadyToShow(): void {
    this.browserWindow.show();
  }

  private async navigate(): Promise<void> {
    if (!this.electronApplication.isPackaged) {
      return this.browserWindow.loadURL(`http://localhost:${rendererAppPort}`);
    } else {
      const indexPath = join(__dirname, '..', rendererAppName, 'index.html');
      return this.browserWindow.loadFile(indexPath);
    }
  }

  private createBrowserWindow(): BrowserWindow {
    const workAreaSize = screen.getPrimaryDisplay().workAreaSize;
    const width = Math.min(1280, workAreaSize.width || 1280);
    const height = Math.min(720, workAreaSize.height || 720);

    // Create the browser window.
    const browserWindow = new BrowserWindow({
      width: width,
      height: height,
      show: false,
      webPreferences: {
        contextIsolation: true,
        backgroundThrottling: false,
        preload: this.preloadPath,
      },
    });
    browserWindow.setMenu(null);
    browserWindow.center();

    return browserWindow;
  }
}
