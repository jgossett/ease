import {TimerState} from './timer-state.class';
import { SECONDS_PER_MINUTE} from './values';

/**
 * User should be rest and not thinking about work.
 */
export class RestState extends TimerState {
  protected get name(): string {
    return 'Rest';
  }

  everySecond(): void {
    this.timerMachine.timerDurationSeconds++;
    const remainingSeconds = this.timerMachine.restDurationSeconds - this.timerMachine.timerDurationSeconds;
    this.updateMinutesAndSeconds(remainingSeconds);

    if (remainingSeconds === 0) {
      this.timerMachine.ready();
    }
  }

  ready(): void {
    this.timerMachine.everySecondSubscription.unsubscribe();

    this.timerMachine.timerDurationSeconds = 0;
    const remainingSeconds = this.timerMachine.workDurationSeconds - this.timerMachine.timerDurationSeconds;
    this.updateMinutesAndSeconds(remainingSeconds);

    this.timerMachine.$everySecond = undefined;

    this.timerMachine.showPauseButton = false;
    this.timerMachine.showPlayButton = true;
    this.timerMachine.showStopButton = false;

    this.timerMachine.state = this.timerMachine.readyState;
  }

  private updateMinutesAndSeconds(remainingSeconds: number): void {
    this.timerMachine.seconds = remainingSeconds % SECONDS_PER_MINUTE;
    this.timerMachine.minutes = Math.floor(remainingSeconds / SECONDS_PER_MINUTE);
  }
}
