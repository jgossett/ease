import { Environment } from '@ease/environment';
import { settingsDefault } from '../settings-default.value';
import { Settings } from '../settings.interface';

export const settings: Settings = {
  ...settingsDefault,

  environment: Environment.Production
};
