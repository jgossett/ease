import { cloneDeep } from 'lodash';
import { State } from './state.class';

/**
 * The user is preparing to work.
 */
export class ReadyState extends State {

  protected get name(): string {
    return 'Ready';
  }

  focus(): void {
    this.timerMachine.remainingDuration = cloneDeep(this.timerMachine.workDuration);
    this.timerMachine.showPauseButton = true;
    this.timerMachine.showPlayButton = false;
    this.timerMachine.showStopButton = true;
    this.timerMachine.timer.start();
    this.timerMachine.state = this.timerMachine.focusState;
  }
}
