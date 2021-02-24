import {TimerState} from './timer-state.class';
import {WorkState} from './work-state.class';
import {RestState} from './rest-state.class';
import {PauseState} from './pause-state.state';
import {AbortState} from './abort-state.class';
import {ReadyState} from './ready-state.class';
import {WelcomeState} from './welcome-state.class';

export class TimerMachine {
  minutes = 25;
  seconds = 0;
  showPlayButton = true;
  showPauseButton = false;
  showStopButton = false;

  readonly welcomeState: TimerState = new WelcomeState(this);
  readonly workState: TimerState = new WorkState(this);
  readonly restState: TimerState = new RestState(this);
  readonly pauseState: TimerState = new PauseState(this);
  readonly abortState: TimerState = new AbortState(this);
  readonly readyState: TimerState = new ReadyState(this);

  state: TimerState = this.welcomeState;

  work(): void {
    this.state.work();
  }

  rest(): void {
    this.state.rest();
  }

  pause(): void {
    this.state.pause();
  }

  abort(): void {
    this.state.abort();
  }

  ready(): void {
    this.state.ready();
  }
}

