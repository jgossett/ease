import {ErrorHandler, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {ApplicationErrorHandler} from './application-error-handler';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: ApplicationErrorHandler
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
