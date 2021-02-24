import {TimerState} from './timer-state.class';

/**
 * User should be rest and not thinking about work.
 */
export class RestState extends TimerState {
  protected get name(): string {
    return 'Rest';
  }
}
