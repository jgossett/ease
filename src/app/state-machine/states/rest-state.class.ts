import { Duration } from 'luxon';
import { State } from './state.class';
import { ZERO_DURATION } from '../../values';

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

    this.timerMachine.showPauseButton = false;
    this.timerMachine.showPlayButton = true;
    this.timerMachine.showStopButton = false;

    this.timerMachine.state = this.timerMachine.readyState;
  }
}
