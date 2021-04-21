import { Environment } from '@ease/environment';
import { Duration } from 'luxon';

export interface Settings {
  readonly environment: Environment;

  readonly restDuration: Duration;
  readonly focusDuration: Duration;
}
