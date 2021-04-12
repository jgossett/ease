import { cloneDeep } from 'lodash-es';
import { Duration } from 'luxon';
import { ZERO_DURATION } from '../../values';
import { PauseAction } from '../actions/pause-action.class';
import { StopAction } from '../actions/stop-action.class';
import { RestState } from './rest-state.class';
import { State } from './state.class';

/**
 * Focus the user on work. Eliminate distractions.
 */
export class FocusState extends State {
  private stopAction = new StopAction(this.timerMachine);
  private pauseAction = new PauseAction(this.timerMachine);

  protected get name(): string {
    return 'Focus';
  }

  everySecond(remainingDuration: Duration): void {
    this.timerMachine.remainingDuration = cloneDeep(remainingDuration);

    const isTimerExpired = this.timerMachine.remainingDuration.equals(ZERO_DURATION);
    if (isTimerExpired) {
      this.timerMachine.rest();
    }
  }

  rest(): void {
    this.timerMachine.timer.stop();

    this.timerMachine.remainingDuration = cloneDeep(this.timerMachine.restDuration);

    this.timerMachine.timer.start(this.timerMachine.restDuration);
    this.timerMachine.transition(RestState);
  }

  pause(): void {
    this.pauseAction.do();
  }

  stop(): void {
    this.stopAction.do();
  }
}
