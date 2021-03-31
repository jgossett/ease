import { ErrorHandler } from '@angular/core';

export class ApplicationErrorHandler implements ErrorHandler {

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleError(thrown: any): void {
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
