import {TimerState} from './timer-state.class';

/**
 * User was interrupted and had to pause the timer.
 */
export class PauseState extends TimerState {
    protected get name(): string {
        return 'Pause';
    }
}
