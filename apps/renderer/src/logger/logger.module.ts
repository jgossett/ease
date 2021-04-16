import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { loggerProvider } from './logger-provider.value';

@NgModule({
  declarations: [],
  providers: [
    loggerProvider
  ],
  imports: [
    CommonModule
  ],
})
export class LoggerModule {
}
