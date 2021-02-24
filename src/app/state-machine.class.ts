import {TimerState} from './timer-state.class';
import {WorkState} from './work-state.class';
import {RestState} from './rest-state.class';
import {PauseState} from './pause-state.state';
import {AbortState} from './abort-state.class';
import {ReadyState} from './ready-state.class';
import {WelcomeState} from './welcome-state.class';

export class TimerMachine {
  minutes: number;
  seconds: number;
  showPlayButton: boolean;
  showPauseButton: boolean;
  showStopButton: boolean;

  protected state;

  private readonly welcomeState: TimerState = new WelcomeState(this);
  private readonly workState: TimerState = new WorkState(this);
  private readonly restState: TimerState = new RestState(this);
  private readonly pauseState: TimerState = new PauseState(this);
  private readonly abortState: TimerState = new AbortState(this);
  private readonly readyState: TimerState = new ReadyState(this);

  constructor() {
    this.state = this.welcomeState;
    this.welcome();
  }

  welcome(): void {
    this.state.welcome();
  }

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

