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
    this.methodNotSupported('work');
  }

  rest(): void {
    this.methodNotSupported('rest');
  }

  pause(): void {
    this.methodNotSupported('pause');
  }

  reset(): void {
    this.methodNotSupported('abort');
  }

  ready(): void {
    this.methodNotSupported('ready');
  }

  everySecond(): void {
    this.methodNotSupported('everySecond');
  }

  private methodNotSupported(methodName: string): void {
    throw new Error(`The "${methodName}" method is not support in the "${this.name}" state.`);
  }
}
