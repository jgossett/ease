import { cloneDeep } from 'lodash-es';
import { Duration } from 'luxon';
import { PauseState } from './states/pause-state.state';
import { SetTimeState } from './states/set-time-state.class';
import { RestState } from './states/rest-state.class';
import { State } from './states/state.class';
import { FocusState } from './states/focus-state.class';
import { Timer } from './timer.class';

export class TimerMachine {
  restDuration = Duration.fromISOTime('00:00:05');
  focusDuration = Duration.fromISOTime('00:00:10');
  remainingDuration = cloneDeep(this.focusDuration);

  showPlayButton = true;
  showPauseButton = false;
  showStopButton = false;

  readonly focusState: State = new FocusState(this);
  readonly restState: State = new RestState(this);
  readonly pauseState: State = new PauseState(this);
  readonly setTimeState: State = new SetTimeState(this);

  state: State = this.setTimeState;

  timer = new Timer(remainingDuration => this.everySecond(remainingDuration));

  focus(): void {
    this.state.focus();
  }

  rest(): void {
    this.state.rest();
  }

  pause(): void {
    this.state.pause();
  }

  reset(): void {
    this.state.stop();
  }

  ready(): void {
    this.state.completeInterval();
  }

  everySecond(remainingDuration: Duration): void {
    this.state.everySecond(remainingDuration);
  }
}
