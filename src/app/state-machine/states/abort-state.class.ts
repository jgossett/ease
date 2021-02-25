import {State} from './state.class';

/**
 * The user can not continue.
 */
export class ResetState extends State {
    protected get name(): string {
        return 'Reset';
    }
}
