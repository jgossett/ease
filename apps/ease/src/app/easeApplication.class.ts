import { BrowserWindow, screen, shell } from 'electron';
import { Injectable } from 'injection-js';
import { join } from 'path';
import { environment } from '../environments/environment';
import { rendererAppName, rendererAppPort } from './constants';
import { Application } from './electron/application';

@Injectable()
export class EaseApplication {
  private mainWindow: BrowserWindow;

  constructor(private application: Application) {
    this.application.on('window-all-closed', () => this.onWindowAllClosed());
    this.application.on('ready', () => this.onReady());
    this.application.on('activate', () => this.onActivate());
  }

  public isDevelopmentMode() {
    const isEnvironmentSet: boolean = 'ELECTRON_IS_DEV' in process.env;
    const getFromEnvironment: boolean = parseInt(process.env.ELECTRON_IS_DEV, 10) === 1;

    return isEnvironmentSet ? getFromEnvironment : !environment.production;
  }

  private onWindowAllClosed(): void {
    if (process.platform !== 'darwin') {
      this.application.quit();
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private onRedirect(event: any, url: string) {
    // URL is in application
    if (url === this.mainWindow.webContents.getURL()) {
      return
    }

      // this is a normal external redirect, open it in a new browser window
      event.preventDefault();
      shell.openExternal(url);

  }

  private onReady() {
    // This method will be called when Electron has finished
    // initialization and is ready to create browser windows.
    // Some APIs can only be used after this event occurs.
    this.mainWindow = this.createMainWindow();
    this.loadBrowserWindow(this.mainWindow);
  }

  private onActivate() {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.

    if (this.mainWindow === null) {
      this.onReady();
    }
  }

  private createMainWindow() {
    const workAreaSize = screen.getPrimaryDisplay().workAreaSize;
    const width = Math.min(1280, workAreaSize.width || 1280);
    const height = Math.min(720, workAreaSize.height || 720);

    // Create the browser window.
    const mainWindow = new BrowserWindow({
      width: width,
      height: height,
      show: false,
      webPreferences: {
        contextIsolation: true,
        backgroundThrottling: false,
        preload: join(__dirname, 'preload.js'),
      },
    });
    mainWindow.setMenu(null);
    mainWindow.center();

    // if main window is ready to show, close the splash window and show the main window
    mainWindow.once('ready-to-show', () => {
      mainWindow.show();
    });

    // handle all external redirects in a new browser window
    // App.mainWindow.webContents.on('will-navigate', App.onRedirect);
    // App.mainWindow.webContents.on('new-window', (event, url, frameName, disposition, options) => {
    //     App.onRedirect(event, url);
    // });

    // Emitted when the window is closed.
    mainWindow.on('closed', () => {
      // Dereference the window object, usually you would store windows
      // in an array if your app supports multi windows, this is the time
      // when you should delete the corresponding element.
      this.mainWindow = null;
    });

    return mainWindow;
  }

  private async loadBrowserWindow(browserWindow: BrowserWindow): Promise<void> {
    if (!this.application.isPackaged) {
      return browserWindow.loadURL(`http://localhost:${rendererAppPort}`);
    } else {
      const indexPath = join(__dirname, '..', rendererAppName, 'index.html');
      return browserWindow.loadFile(indexPath);
    }
  }
}
