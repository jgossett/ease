import { Observable, Subscription, timer } from 'rxjs';
import { ONE_SECOND } from '../values';

export class Timer {
  private $everySecond: Observable<number>;
  private everySecondSubscription: Subscription;

  constructor(private everySecond: () => void) {
  }

  start(): void {
    const isStarted = this.$everySecond !== undefined || this.everySecondSubscription !== undefined;
    if (isStarted) {
      throw Error('Cannot start the timer when timer is started.');
    }

    this.$everySecond = timer(ONE_SECOND, ONE_SECOND);
    this.everySecondSubscription = this.$everySecond.subscribe(_ => {
      this.everySecond();
    });
  }

  stop(): void {
    const isStopped = this.$everySecond === undefined || this.everySecondSubscription === undefined;
    if (isStopped) {
      throw Error('Cannot stop the timer when timer is stopped.');
    }

    this.everySecondSubscription.unsubscribe();
    this.everySecondSubscription = undefined;

    this.$everySecond = undefined;
  }
}
