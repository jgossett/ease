import { cloneDeep } from 'lodash-es';
import { TimerMachine } from '../state-machine.class';
import { SetTimeState } from '../states/set-time-state.class';

export class StopAction {
  constructor(private timerMachine: TimerMachine) {
  }

  do(): void {
    this.timerMachine.timer.stop();

    this.timerMachine.remainingDuration = cloneDeep(this.timerMachine.focusDuration);

    this.timerMachine.showStopButton = false;
    this.timerMachine.showPauseButton = false;
    this.timerMachine.showPlayButton = true;

    this.timerMachine.transition(SetTimeState);
  }
}
