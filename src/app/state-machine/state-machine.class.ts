import {State} from './states/state.class';
import {FocusState} from './states/work-state.class';
import {RestState} from './states/rest-state.class';
import {PauseState} from './states/pause-state.state';
import {ResetState} from './states/abort-state.class';
import {ReadyState} from './states/ready-state.class';
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

  readonly focusState: State = new FocusState(this);
  readonly restState: State = new RestState(this);
  readonly pauseState: State = new PauseState(this);
  readonly abortState: State = new ResetState(this);
  readonly readyState: State = new ReadyState(this);

  state: State = this.readyState;
  everySecondSubscription: Subscription;

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

  everySecond(): void {
    this.state.everySecond();
  }
}

