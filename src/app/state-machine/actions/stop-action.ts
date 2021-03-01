import { cloneDeep } from 'lodash-es';
import { TimerMachine } from '../state-machine.class';

export class StopAction {
  constructor(private timerMachine: TimerMachine) {
  }

  do(): void {
    this.timerMachine.timer.stop();
    this.timerMachine.remainingDuration = cloneDeep(this.timerMachine.focusDuration);
    this.timerMachine.state = this.timerMachine.setTimeState;

    this.timerMachine.showStopButton = false;
    this.timerMachine.showPauseButton = false;
    this.timerMachine.showPlayButton = true;
  }
}
