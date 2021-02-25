import {State} from './state.class';

/**
 * The user is interruption. Once the user has resolved interruption, the user continue.
 */
export class PauseState extends State {
    protected get name(): string {
        return 'Pause';
    }
}
