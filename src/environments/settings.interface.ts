import { Duration } from 'luxon';
import { Environment } from './environment.enum';

export interface Settings {
  readonly environment: Environment;

  readonly restDuration: Duration;
  readonly focusDuration: Duration;
}
