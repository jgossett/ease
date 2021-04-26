import { ValueProvider } from '@angular/core';
import { ConsoleFormattedStream, createLogger, INFO, stdSerializers } from 'browser-bunyan';
import { Logger } from './logger.class';

const logger = createLogger({
  name: 'web-application',
  streams: [
    {
      level: INFO, // or use the string 'info'
      stream: new ConsoleFormattedStream()
    }
  ],
  serializers: stdSerializers,
  src: true,
});

export const loggerProvider: ValueProvider = {
  provide: Logger,
  useValue: logger
};
