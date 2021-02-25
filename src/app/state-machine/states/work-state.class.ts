import { cloneDeep } from 'lodash-es';
import { timer } from 'rxjs';
import { State } from './state.class';
import { ONE_SECOND, ZERO_DURATION } from '../../values';

/**
 * The user focuses on work without distractions.
 */
export class FocusState extends State {
  protected get name(): string {
    return 'Work';
  }

  everySecond(): void {
    this.timerMachine.remainingDuration = this.timerMachine.remainingDuration.minus({seconds: 1});

    const isTimerExpired = this.timerMachine.remainingDuration.equals(ZERO_DURATION);
    if (isTimerExpired) {
      this.timerMachine.rest();
    }
  }

  rest(): void {
    this.timerMachine.everySecondSubscription.unsubscribe();

    this.timerMachine.remainingDuration = cloneDeep(this.timerMachine.restDuration);

    this.timerMachine.$everySecond = timer(ONE_SECOND, ONE_SECOND);
    this.timerMachine.everySecondSubscription = this.timerMachine.$everySecond.subscribe(_ => {
      this.timerMachine.everySecond();
    });
    this.timerMachine.state = this.timerMachine.restState;
  }
}
