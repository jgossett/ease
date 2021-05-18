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
  logger.info("The desktop application has started.");

  // creates the Ease application.
  const easeApplication = injector.get(EaseApplication);
  easeApplication.initialize();

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
  logger.fatal('Could not load the desktop application.', error);
  throw error;
}

logger.info('The desktop application has loaded.');
