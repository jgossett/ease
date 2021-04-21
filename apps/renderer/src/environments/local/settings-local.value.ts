import { Duration } from 'luxon';
import { Environment } from '@ease/environment';
import { Settings } from '../settings.interface';
import { settingsDefault } from '../settings-default.value';

export const settings: Settings = {
  ...settingsDefault,

  environment: Environment.Local,

  focusDuration: Duration.fromISOTime('00:00:10'),
  restDuration: Duration.fromISOTime('00:00:05')
};
