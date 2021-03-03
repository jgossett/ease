import { Duration } from 'luxon';
import { Settings } from './settings.interface';

export const settingsDefault: Settings = {
  environment: undefined,

  focusDuration: Duration.fromISOTime('00:25:00'),
  restDuration: Duration.fromISOTime('00:05:00'),
};
