import { ErrorHandler, Injectable } from '@angular/core';
import { Logger } from '../logger/logger.class';

@Injectable({
  providedIn: 'root'
})
export class ApplicationErrorHandler implements ErrorHandler {
  constructor(private logger: Logger) {
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleError(thrown: any): void {
    this.logger.error('Encountered an unhandled thrown exception.', thrown);

    const message = this.format(thrown);
    alert(message);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private format(thrown: any): string {
    let message: string;
    if (thrown instanceof Error) {
      const error: Error = thrown as Error;
      message = error.message;
    } else {
      message = thrown.toString();
    }

    return 'An unhandled error has occurred.'
      + '\n'
      + `\n  ${message}`;
  }
}
