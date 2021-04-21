import { Environment } from '@ease/environment';
import { Settings } from './settings.class';

declare const __BUILD_VERSION__: string;

export const settings: Settings = {
  environment: Environment.Local,
  version: __BUILD_VERSION__
}
