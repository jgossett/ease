import { createLogger } from 'browser-bunyan';

/* eslint-disable */

/**
 * A stubbed Logger class. This class provides better integration between Angular's Dependency Injection feature and the Bunyan module.
 */
export abstract class Logger implements ReturnType<typeof createLogger> {
  abstract addStream(): void;

  abstract addSerializers(): void;

  abstract child(options?: Parameters<typeof createLogger>[0], simple?: boolean): Logger;

  abstract level(level: string | number): void;
  abstract level(): number;

  abstract levels(stream: string | number, level: string | number): void;
  abstract levels(stream: string): number;
  abstract levels(): Array<number>;

  // trace
  abstract trace(fields: object, msg: string, ...args: any[]): void;
  abstract trace(err: Error, msg: string, ...args: any[]): void;
  abstract trace(msg: string, ...args: any[]): void;
  abstract trace(): boolean;

  // debug
  abstract debug(fields: object, msg: string, ...args: any[]): void;
  abstract debug(err: Error, msg: string, ...args: any[]): void;
  abstract debug(msg: string, ...args: any[]): void;
  abstract debug(): boolean;

  // info
  abstract info(fields: object, msg: string, ...args: any[]): void;
  abstract info(err: Error, msg: string, ...args: any[]): void;
  abstract info(msg: string, ...args: any[]): void;
  abstract info(): boolean;

  // warn
  abstract warn(fields: object, msg: string, ...args: any[]): void;
  abstract warn(err: Error, msg: string, ...args: any[]): void;
  abstract warn(msg: string, ...args: any[]): void;
  abstract warn(): boolean;

  // error
  abstract error(fields: object, msg: string, ...args: any[]): void;
  abstract error(err: Error, msg: string, ...args: any[]): void;
  abstract error(msg: string, ...args: any[]): void;
  abstract error(): boolean;

  // fatal
  abstract fatal(fields: object, msg: string, ...args: any[]): void;
  abstract fatal(err: Error, msg: string, ...args: any[]): void;
  abstract fatal(msg: string, ...args: any[]): void;
  abstract fatal(): boolean;

}

/* eslint-enable */
