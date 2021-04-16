import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { loggerProvider } from '../logger/logger-provider.value';
import { LoggerModule } from '../logger/logger.module';

import { AppComponent } from './app.component';
import { ApplicationErrorHandler } from './application-error-handler';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // angular modules
    BrowserModule,

    // 3rd party modules
    FontAwesomeModule,

    LoggerModule,
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: ApplicationErrorHandler
    },
    loggerProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
