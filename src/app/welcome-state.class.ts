import {TimerState} from './timer-state.class';
import {timer} from 'rxjs';

/**
 * The user first starts the application.
 */
export class WelcomeState extends TimerState {
  protected get name(): string {
    return 'Welcome';
  }

  work(): void {
    this.timerMachine.minutes = 25;
    this.timerMachine.seconds = 0;
    this.timerMachine.showPauseButton = true;
    this.timerMachine.showPlayButton = false;
    this.timerMachine.showStopButton = true;

    this.timerMachine.state = this.timerMachine.workState;
  }
}
