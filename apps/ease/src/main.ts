import * as Logger from 'bunyan';
import { app } from 'electron';
// required by injection-js.
import 'reflect-metadata';
import { EaseApplication } from './app/ease-application.class';
import ElectronEvents from './app/events/electron.events';
import SquirrelEvents from './app/events/squirrel.events';
import { InjectorFactory } from './injector-factory.class';

const injectorFactory = new InjectorFactory();
const injector = injectorFactory.build();

const logger = injector.get(Logger);

try {
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
} catch (error) {
  logger.fatal('An unhandled exception occurred. Must exit the application.', error);
}
