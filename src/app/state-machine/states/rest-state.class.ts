import { cloneDeep } from 'lodash-es';
import { Duration } from 'luxon';
import { ZERO_DURATION } from '../../values';
import { StopAction } from '../actions/stop-action';
import { SetTimeState } from './set-time-state.class';
import { State } from './state.class';

/**
 * The user should mark the incomplete task and rest without thinking about the work.
 */
export class RestState extends State {
  private stopAction = new StopAction(this.timerMachine);

  protected get name(): string {
    return 'Rest';
  }

  everySecond(remainingDuration: Duration): void {
    this.timerMachine.remainingDuration = remainingDuration;

    const isTimerExpired = this.timerMachine.remainingDuration.equals(ZERO_DURATION);
    if (isTimerExpired) {
      this.timerMachine.completeInterval();
    }
  }

  stop(): void {
    this.stopAction.do();
  }

  completeInterval(): void {
    this.timerMachine.timer.stop();

    this.timerMachine.remainingDuration = cloneDeep(this.timerMachine.focusDuration);

    this.timerMachine.showPauseButton = false;
    this.timerMachine.showPlayButton = true;
    this.timerMachine.showStopButton = false;

    this.timerMachine.transition(SetTimeState);
  }
}
