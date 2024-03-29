import { Duration } from 'luxon';
import { TimerMachine } from '../state-machine.class';

export abstract class State {
  /**
   * Gets the state's name. (e.g. focus)
   * @protected
   */
  protected abstract get name(): string

  constructor(protected timerMachine: TimerMachine) {
  }

  focus(): void {
    this.methodNotSupported('focus');
  }

  rest(): void {
    this.methodNotSupported('rest');
  }

  pause(): void {
    this.methodNotSupported('pause');
  }

  stop(): void {
    this.methodNotSupported('stop');
  }

  completeInterval(): void {
    this.methodNotSupported('ready');
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  everySecond(remainingDuration: Duration): void {
    this.methodNotSupported('everySecond');
  }

  private methodNotSupported(methodName: string): void {
    throw new Error(`The "${methodName}" method is not support in the "${this.name}" state.`);
  }
}
