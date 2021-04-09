import { app } from 'electron';
import 'reflect-metadata';
import { ReflectiveInjector } from 'injection-js';
import { EaseApplication } from './app/easeApplication.class';
import ElectronEvents from './app/events/electron.events';
import SquirrelEvents from './app/events/squirrel.events';
import { Application } from './app/electron/application';

console.log(app.name);
console.log(app.isPackaged);


const injector = ReflectiveInjector.resolveAndCreate([
  EaseApplication,
  {
    provide: Application,
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
