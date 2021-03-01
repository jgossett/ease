import { cloneDeep } from 'lodash-es';
import { Duration } from 'luxon';
import { ZERO_DURATION } from '../../values';
import { State } from './state.class';

/**
 * The user should rest without thinking about the work.
 */
export class RestState extends State {
  protected get name(): string {
    return 'Rest';
  }

  everySecond(remainingDuration: Duration): void {
    this.timerMachine.remainingDuration = remainingDuration;

    const isTimerExpired = this.timerMachine.remainingDuration.equals(ZERO_DURATION);
    if (isTimerExpired) {
      this.timerMachine.ready();
    }
  }

  ready(): void {
    this.timerMachine.timer.stop();

    this.timerMachine.remainingDuration = cloneDeep(this.timerMachine.focusDuration);

    this.timerMachine.showPauseButton = false;
    this.timerMachine.showPlayButton = true;
    this.timerMachine.showStopButton = false;

    this.timerMachine.state = this.timerMachine.readyState;
  }
}
