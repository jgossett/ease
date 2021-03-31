import { Duration } from 'luxon';
import { State } from '../states/state.class';

export class MockState extends State {
  protected get name(): string {
    return 'Test State';
  }

  constructor() {
    super(undefined);
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  focus(): void {
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  rest(): void {
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  pause(): void {
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  stop(): void {
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  completeInterval(): void {
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
  everySecond(remainingDuration: Duration): void {
  }
}
