import {TimerState} from './timer-state.class';

/**
 * The user is interruption. Once the user has resolved interruption, the user continue.
 */
export class PauseState extends TimerState {
    protected get name(): string {
        return 'Pause';
    }
}
