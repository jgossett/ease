import {TimerState} from './timer-state.class';
import {FocusedState} from './work-state.class';
import {RestState} from './rest-state.class';
import {PauseState} from './pause-state.state';
import {AbortState} from './abort-state.class';
import {ReadyState} from './ready-state.class';
import {Observable, Subscription} from 'rxjs';
import { Duration } from 'luxon';
import { cloneDeep } from 'lodash-es';

export class TimerMachine {
  restDuration = Duration.fromISOTime('00:00:15');
  workDuration = Duration.fromISOTime('00:00:30');
  remainingDuration = cloneDeep(this.workDuration);

  $everySecond: Observable<number>;

  showPlayButton = true;
  showPauseButton = false;
  showStopButton = false;

  readonly workState: TimerState = new FocusedState(this);
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

