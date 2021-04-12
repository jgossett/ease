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

  private stateInstance: State = new SetTimeState(this);
  private stateClass: StateClass = SetTimeState;
  private previousStateClass: StateClass;

  focus(): void {
    this.stateInstance.focus();
  }

  rest(): void {
    this.stateInstance.rest();
  }

  pause(): void {
    this.stateInstance.pause();
  }

  stop(): void {
    this.stateInstance.stop();
  }

  completeInterval(): void {
    this.stateInstance.completeInterval();
  }

  everySecond(remainingDuration: Duration): void {
    this.stateInstance.everySecond(remainingDuration);
  }

  /**
   * @param stateClass The next state to transition to. (e.g. PauseState)
   */
  transition(stateClass: StateClass): void {
    this.previousStateClass = this.stateClass;
    this.stateClass = stateClass;
    this.stateInstance = new stateClass(this);
  }

  back(): void {
    this.transition(this.previousStateClass);
  }
}
