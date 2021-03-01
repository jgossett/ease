import { cloneDeep } from 'lodash-es';
import { Duration } from 'luxon';
import { ResetState } from './states/reset-state.class';
import { PauseState } from './states/pause-state.state';
import { ReadyState } from './states/ready-state.class';
import { RestState } from './states/rest-state.class';
import { State } from './states/state.class';
import { FocusState } from './states/focus-state.class';
import { Timer } from './timer.class';

export class TimerMachine {
  restDuration = Duration.fromISOTime('00:00:15');
  focusDuration = Duration.fromISOTime('00:00:30');
  remainingDuration = cloneDeep(this.focusDuration);

  showPlayButton = true;
  showPauseButton = false;
  showStopButton = false;

  readonly focusState: State = new FocusState(this);
  readonly restState: State = new RestState(this);
  readonly pauseState: State = new PauseState(this);
  readonly abortState: State = new ResetState(this);
  readonly readyState: State = new ReadyState(this);

  state: State = this.readyState;

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
    this.state.reset();
  }

  ready(): void {
    this.state.ready();
  }

  everySecond(remainingDuration: Duration): void {
    this.state.everySecond(remainingDuration);
  }
}
