import {TimerState} from './timer-state.class';

/**
 * The user first starts the application.
 */
export class WelcomeState extends TimerState {
  protected get name(): string {
    return 'Welcome';
  }

  welcome(): void {
    this.timerMachine.minutes = 25;
    this.timerMachine.seconds = 0;
    this.timerMachine.showPlayButton = true;
    this.timerMachine.showPauseButton = false;
    this.timerMachine.showStopButton = false;
  }
}
