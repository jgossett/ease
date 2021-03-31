import { ErrorHandler } from '@angular/core';

export class ApplicationErrorHandler implements ErrorHandler {
  handleError(thrown: any): void {
    const message = this.format(thrown);
    alert(message);
  }

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
