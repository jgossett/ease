import { cloneDeep } from 'lodash';
import { FocusState } from './focus-state.class';
import { State } from './state.class';

/**
 * The user finds a task and set a timer to focus on.
 */
export class SetTimeState extends State {
  protected get name(): string {
    return 'Set Time';
  }

  focus(): void {
    this.timerMachine.remainingDuration = cloneDeep(this.timerMachine.focusDuration);
    this.timerMachine.showPauseButton = true;
    this.timerMachine.showPlayButton = false;
    this.timerMachine.showStopButton = true;
    this.timerMachine.timer.start(this.timerMachine.focusDuration);
    this.timerMachine.transition(FocusState);
  }
}
