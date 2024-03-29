import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Environment } from '@ease/environment';
import { AppModule } from './app/app.module';
import { settings } from './environments/settings.value';

if (settings.environment === Environment.Production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
