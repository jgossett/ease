import { TimerMachine } from '../state-machine.class';
import { PauseState } from '../states/pause-state.state';

export class PauseAction {
  constructor(private timerMachine: TimerMachine) {
  }

  do(): void {
    this.timerMachine.timer.stop();

    this.timerMachine.showPauseButton = false;
    this.timerMachine.showPlayButton = true;
    this.timerMachine.showStopButton = false;

    this.timerMachine.transition(PauseState);
  }
}
