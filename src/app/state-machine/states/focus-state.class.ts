import { cloneDeep } from 'lodash-es';
import { Duration } from 'luxon';
import { ZERO_DURATION } from '../../values';
import { State } from './state.class';

/**
 * The user focuses on work without distractions.
 */
export class FocusState extends State {
  protected get name(): string {
    return 'Work';
  }

  everySecond(remainingDuration: Duration): void {
    this.timerMachine.remainingDuration = remainingDuration;

    const isTimerExpired = this.timerMachine.remainingDuration.equals(ZERO_DURATION);
    if (isTimerExpired) {
      this.timerMachine.rest();
    }
  }

  rest(): void {
    this.timerMachine.timer.stop();

    this.timerMachine.remainingDuration = cloneDeep(this.timerMachine.restDuration);

    this.timerMachine.timer.start(this.timerMachine.restDuration);
    this.timerMachine.state = this.timerMachine.restState;
  }
}
