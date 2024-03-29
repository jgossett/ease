import { cloneDeep } from 'lodash-es';
import { Duration } from 'luxon';
import { ZERO_DURATION } from '../../values';
import { PauseAction } from '../actions/pause-action.class';
import { StopAction } from '../actions/stop-action.class';
import { SetTimeState } from './set-time-state.class';
import { State } from './state.class';

/**
 * Rest the user from work. (e.g. take a walk, bathroom break)
 */
export class RestState extends State {
  private stopAction = new StopAction(this.timerMachine);
  private pauseAction = new PauseAction(this.timerMachine);

  protected get name(): string {
    return 'Rest';
  }

  everySecond(remainingDuration: Duration): void {
    this.timerMachine.remainingDuration = cloneDeep(remainingDuration);

    const isTimerExpired = this.timerMachine.remainingDuration.equals(ZERO_DURATION);
    if (isTimerExpired) {
      this.timerMachine.completeInterval();
    }
  }

  completeInterval(): void {
    this.timerMachine.timer.stop();

    this.timerMachine.remainingDuration = cloneDeep(this.timerMachine.focusDuration);

    this.timerMachine.showPauseButton = false;
    this.timerMachine.showPlayButton = true;
    this.timerMachine.showStopButton = false;

    this.timerMachine.transition(SetTimeState);
  }

  pause(): void {
    this.pauseAction.do();
  }

  stop(): void {
    this.stopAction.do();
  }
}
