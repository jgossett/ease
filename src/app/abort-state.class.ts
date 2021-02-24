import {TimerState} from './timer-state.class';

/**
 * User stopped the timer.
 */
export class AbortState extends TimerState {
    protected get name(): string {
        return 'Abort';
    }
}
