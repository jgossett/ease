import { Environment } from '@ease/environment';
import { Settings } from '../settings.class';
import { settings as settingsDefault } from '../settings.value';

export const settings: Settings = {
  ...settingsDefault,

  environment: Environment.Production
};
