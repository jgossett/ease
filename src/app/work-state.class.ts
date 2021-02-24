import {TimerState} from './timer-state.class';
import {MILLISECONDS_PER_SECOND, SECONDS_PER_MINUTE} from './values';
import {timer} from 'rxjs';

/**
 * The user should be focused and working on a single task.
 */
export class WorkState extends TimerState {
  protected get name(): string {
    return 'Work';
  }

  everySecond(): void {
    this.timerMachine.timerDurationSeconds++;
    const remainingSeconds = this.timerMachine.workDurationSeconds - this.timerMachine.timerDurationSeconds;
    this.updateMinutesAndSeconds(remainingSeconds);

    if (remainingSeconds === 0) {
      this.timerMachine.rest();
    }
  }

  rest(): void {
    this.timerMachine.everySecondSubscription.unsubscribe();

    this.timerMachine.timerDurationSeconds = 0;
    const remainingSeconds = this.timerMachine.restDurationSeconds - this.timerMachine.timerDurationSeconds;
    this.updateMinutesAndSeconds(remainingSeconds);

    this.timerMachine.$everySecond = timer(MILLISECONDS_PER_SECOND, MILLISECONDS_PER_SECOND);
    this.timerMachine.everySecondSubscription = this.timerMachine.$everySecond.subscribe(_ => {
      this.timerMachine.everySecond();
    });
    this.timerMachine.state = this.timerMachine.restState;
  }

  private updateMinutesAndSeconds(remainingSeconds: number): void {
    this.timerMachine.seconds = remainingSeconds % SECONDS_PER_MINUTE;
    this.timerMachine.minutes = Math.floor(remainingSeconds / SECONDS_PER_MINUTE);
  }
}
