import { Duration } from 'luxon';
import { State } from '../states/state.class';

export class MockState extends State {
  protected get name(): string {
    return 'Test State';
  }

  constructor() {
    super(undefined);
  }

  focus(): void {
  }

  rest(): void {
  }

  pause(): void {
  }

  stop(): void {
  }

  completeInterval(): void {
  }

  everySecond(remainingDuration: Duration): void {
  }
}
