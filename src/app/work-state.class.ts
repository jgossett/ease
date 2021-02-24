import {TimerState} from './timer-state.class';

/**
 * User should be focused and working on a single task.
 */
export class WorkState extends TimerState {
  protected get name(): string {
    return 'Work';
  }
}
