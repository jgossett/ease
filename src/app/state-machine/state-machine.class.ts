import { cloneDeep } from 'lodash-es';
import { Duration } from 'luxon';
import { settings } from '../../environments/settings.value';
import { SetTimeState } from './states/set-time-state.class';
import { State } from './states/state.class';
import { Timer } from './timer.class';

type StateClass = new (timerMachine: TimerMachine) => State;

export class TimerMachine {
  restDuration = settings.restDuration;
  focusDuration = settings.focusDuration;
  remainingDuration = cloneDeep(this.focusDuration);

  showPlayButton = true;
  showPauseButton = false;
  showStopButton = false;

  timer = new Timer(remainingDuration => this.everySecond(remainingDuration));

  private state: State = new SetTimeState(this);
  private stateClass: StateClass;
  private previousStateClass: StateClass;

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

  completeInterval(): void {
    this.state.completeInterval();
  }

  everySecond(remainingDuration: Duration): void {
    this.state.everySecond(remainingDuration);
  }

  /**
   * @param stateClass The next state to transition to. (e.g. PauseState)
   */
  transition(stateClass: StateClass): void {
    this.previousStateClass = this.stateClass;
    this.stateClass = stateClass;
    this.state = new stateClass(this);
  }

  back(): void {
    this.transition(this.previousStateClass);
  }
}
