import * as Logger from 'bunyan';
import { app } from 'electron';
import { ReflectiveInjector } from 'injection-js';
import { Injector } from 'injection-js/injector';
import { Provider } from 'injection-js/provider';
import { EaseApplication } from './app/ease-application.class';
import { ElectronApplication } from './app/electron/electron-application.class';
import { MainWindow } from './app/main-window.class';
import { LoggerFactory } from './logger-factory.class';

export class InjectorFactory {
  private readonly loggerFactory = new LoggerFactory();

  build(): Injector {
    return ReflectiveInjector.resolveAndCreate(this.createProviders());
  }

  private createProviders(): Provider[] {
    const providers: Provider[] = [
      EaseApplication,
      MainWindow,
      {
        provide: ElectronApplication,
        useValue: app
      },

      // logger
      {
        provide: Logger,
        useFactory: () => this.loggerFactory.build()
      }
    ];

    return providers;
  }
}
