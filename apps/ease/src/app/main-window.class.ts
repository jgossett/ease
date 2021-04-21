import * as Logger from 'bunyan';
import { BrowserWindow, Display, screen } from 'electron';
import { Injectable } from 'injection-js';
import { join } from 'path';
import { rendererAppName, rendererAppUrl } from './constants';
import { ElectronApplication } from './electron/electron-application.class';

@Injectable()
export class MainWindow {
  private readonly preloadPath = join(__dirname, 'preload.js');
  private browserWindow: BrowserWindow;

  constructor(private electronApplication: ElectronApplication, private logger: Logger) {
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
      try {
        this.logger.debug('Started to navigate the Main window.');
        await this.browserWindow.loadURL(rendererAppUrl);
        return;
      } catch (error) {
        this.logger.fatal(`Could not navigate to "${rendererAppUrl}. Verify "nx serve" is started.`, error);
      }
    } else {
      const indexPath = join(__dirname, '..', rendererAppName, 'index.html');
      return this.browserWindow.loadFile(indexPath);
    }
  }

  private createBrowserWindow(): BrowserWindow {
    const secondaryDisplay = this.findSecondaryDisplay();
    const display = secondaryDisplay ? secondaryDisplay : screen.getPrimaryDisplay();
    const workAreaSize = display.workAreaSize;

    const width = Math.min(1280, workAreaSize.width || 1280);
    const height = Math.min(720, workAreaSize.height || 720);

    // Create the browser window.
    const browserWindow = new BrowserWindow({
      x: display.bounds.x + 1,
      y: display.bounds.y + 1,
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

  /**
   * Finds the secondary display.
   * @returns Display The secondary display. Returns undefined when secondary display is not found.
   */
  private findSecondaryDisplay(): Display {
    const displayAll = screen.getAllDisplays();
    return 2 <= displayAll.length ? displayAll[1] : undefined;
  }
}
