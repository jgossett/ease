import { cloneDeep } from 'lodash-es';
import { ZERO_DURATION } from '../../values';
import { State } from './state.class';

/**
 * The user focuses on work without distractions.
 */
export class FocusState extends State {
  protected get name(): string {
    return 'Work';
  }

  everySecond(): void {
    this.timerMachine.remainingDuration = this.timerMachine.remainingDuration.minus({ seconds: 1 });

    const isTimerExpired = this.timerMachine.remainingDuration.equals(ZERO_DURATION);
    if (isTimerExpired) {
      this.timerMachine.rest();
    }
  }

  rest(): void {
    this.timerMachine.timer.stop();

    this.timerMachine.remainingDuration = cloneDeep(this.timerMachine.restDuration);

    this.timerMachine.timer.start();
    this.timerMachine.state = this.timerMachine.restState;
  }
}
