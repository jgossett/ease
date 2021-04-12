import { app } from 'electron';
import { ReflectiveInjector } from 'injection-js';
// required by injection-js.
import 'reflect-metadata';
import { EaseApplication } from './app/ease-application.class';
import { ElectronApplication } from './app/electron/electron-application.class';
import ElectronEvents from './app/events/electron.events';
import SquirrelEvents from './app/events/squirrel.events';
import { MainWindow } from './app/main-window.class';

const injector = ReflectiveInjector.resolveAndCreate([
  EaseApplication,
  MainWindow,
  {
    provide: ElectronApplication,
    useValue: app
  }
]);

const easeApplication: EaseApplication = injector.get(EaseApplication);

if (SquirrelEvents.handleEvents()) {
  // squirrel event handled (except first run event) and app will exit in 1000ms, so don't do anything else
  app.quit();
}

ElectronEvents.bootstrapElectronEvents();

// initialize auto updater service
// TODO: fix the auto updater.
// if (!EaseApplicationClass.isDevelopmentMode()) {
// UpdateEvents.initAutoUpdateService();
// }
