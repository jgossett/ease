import { Environment } from '../../../../../libs/environment/src';
import { settingsDefault } from '../settings-default.value';
import { Settings } from '../settings.interface';

export const settings: Settings = {
  ...settingsDefault,

  environment: Environment.Production
};
