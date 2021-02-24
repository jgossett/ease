import {TimerState} from './timer-state.class';

/**
 * User is ready to start another interval.
 */
export class ReadyState extends TimerState {
    protected get name(): string {
        return 'Ready';
    }
}
