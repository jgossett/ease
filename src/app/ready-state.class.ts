import {TimerState} from './timer-state.class';
import {timer} from 'rxjs';
import {MILLISECONDS_PER_SECOND} from './values';

/**
 * User is ready to start another interval.
 */
export class ReadyState extends TimerState {
    protected get name(): string {
      return 'Ready';
    }

  work(): void {
    this.timerMachine.minutes = 25;
    this.timerMachine.seconds = 0;
    this.timerMachine.showPauseButton = true;
    this.timerMachine.showPlayButton = false;
    this.timerMachine.showStopButton = true;

    this.timerMachine.timerDurationSeconds = 0;
    this.timerMachine.$everySecond = timer(MILLISECONDS_PER_SECOND, MILLISECONDS_PER_SECOND);
    this.timerMachine.everySecondSubscription = this.timerMachine.$everySecond.subscribe(_ => {
      this.timerMachine.everySecond();
    });

    this.timerMachine.state = this.timerMachine.workState;
  }
}
