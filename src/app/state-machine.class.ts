import {TimerState} from './timer-state.class';
import {WorkState} from './work-state.class';
import {RestState} from './rest-state.class';
import {PauseState} from './pause-state.state';
import {AbortState} from './abort-state.class';
import {ReadyState} from './ready-state.class';
import {Observable, Subscription} from 'rxjs';
import {SECONDS_PER_MINUTE} from './values';

export class TimerMachine {
  restDurationSeconds = 0.25 * SECONDS_PER_MINUTE;
  workDurationSeconds = 0.5 * SECONDS_PER_MINUTE;

  $everySecond: Observable<number>;
  minutes = Math.floor(this.workDurationSeconds / SECONDS_PER_MINUTE);
  seconds = this.workDurationSeconds % SECONDS_PER_MINUTE;
  timerDurationSeconds = 0;

  showPlayButton = true;
  showPauseButton = false;
  showStopButton = false;

  readonly workState: TimerState = new WorkState(this);
  readonly restState: TimerState = new RestState(this);
  readonly pauseState: TimerState = new PauseState(this);
  readonly abortState: TimerState = new AbortState(this);
  readonly readyState: TimerState = new ReadyState(this);

  state: TimerState = this.readyState;
  everySecondSubscription: Subscription;

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

  everySecond(): void {
    this.state.everySecond();
  }
}

