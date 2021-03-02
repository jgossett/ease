import { assert, not } from 'check-types';
import { Duration } from 'luxon';
import { Observable, Subscription, timer } from 'rxjs';
import { map } from 'rxjs/operators';
import { ONE_SECOND } from '../values';

export class Timer {
  private $everySecond: Observable<Duration>;
  private everySecondSubscription: Subscription;

  constructor(private everySecond: (remainingDuration: Duration) => void) {
    not.null(this.everySecond);
  }

  start(expiredDuration: Duration): void {
    const isStarted = this.$everySecond !== undefined || this.everySecondSubscription !== undefined;
    assert(!isStarted, 'Cannot start the timer when timer is started.');

    this.$everySecond = this.createTimer(expiredDuration);
    this.everySecondSubscription = this.$everySecond.subscribe(_ => this.everySecond(_));
  }

  stop(): void {
    const isStopped = this.$everySecond === undefined || this.everySecondSubscription === undefined;
    assert(!isStopped, 'Cannot stop the timer when timer is stopped.');

    this.everySecondSubscription.unsubscribe();
    this.everySecondSubscription = undefined;

    this.$everySecond = undefined;
  }

  private createTimer(expiredDuration: Duration): Observable<Duration> {
    const calculateElapsedDuration = (elapsedSeconds: number): Duration => {
      const elapsedDuration = Duration.fromObject({ seconds: elapsedSeconds });
      return expiredDuration.minus(elapsedDuration);
    };

    return timer(0, ONE_SECOND)
      .pipe(
        map(calculateElapsedDuration),
      );
  }
}
