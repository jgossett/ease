import { cloneDeep } from 'lodash';
import { timer } from 'rxjs';
import { State } from './state.class';
import { ONE_SECOND } from '../../values';

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

    this.timerMachine.$everySecond = timer(ONE_SECOND, ONE_SECOND);
    this.timerMachine.everySecondSubscription = this.timerMachine.$everySecond.subscribe(_ => {
      this.timerMachine.everySecond();
    });

    this.timerMachine.state = this.timerMachine.focusState;
  }
}
