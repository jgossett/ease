import { assert, not } from 'check-types';
import { Duration } from 'luxon';
import { Observable, Subscription, timer } from 'rxjs';
import { map } from 'rxjs/operators';
import { ONE_SECOND } from '../values';

export class Timer {
  private $everySecond: Observable<number>;
  private everySecondSubscription: Subscription;

  constructor(private everySecond: (remainingDuration: Duration) => void) {
    not.null(this.everySecond);
  }

  start(delayDuration: Duration): void {
    const isStarted = this.$everySecond !== undefined || this.everySecondSubscription !== undefined;
    assert(!isStarted, 'Cannot start the timer when timer is started.');

    this.$everySecond = timer(ONE_SECOND, ONE_SECOND);
    this.everySecondSubscription = this.$everySecond.pipe(
      map(elapsedSeconds => {
        const elapsedDuration = Duration.fromObject({ seconds: elapsedSeconds });
        return delayDuration.minus(elapsedDuration);
      })
    )
      .subscribe(remainingDuration => {
        this.everySecond(remainingDuration);
      });
  }

  stop(): void {
    const isStopped = this.$everySecond === undefined || this.everySecondSubscription === undefined;
    assert(!isStopped, 'Cannot stop the timer when timer is stopped.');

    this.everySecondSubscription.unsubscribe();
    this.everySecondSubscription = undefined;

    this.$everySecond = undefined;
  }
}
