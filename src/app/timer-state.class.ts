import {TimerMachine} from './state-machine.class';

export abstract class TimerState {
    /**
     * Gets the state's name. (e.g. work)
     * @protected
     */
    protected abstract get name(): string

    constructor(protected timerMachine: TimerMachine) {
    }

    welcome(): void {
        this.methodNotSupported('welcome');
    }

    work(): void {
        this.methodNotSupported('work');
    }

    rest(): void {
        this.methodNotSupported('rest');
    }

    pause(): void {
        this.methodNotSupported('pause');
    }

    abort(): void {
        this.methodNotSupported('abort');
    }

    ready(): void {
        this.methodNotSupported('ready');
    }

    private methodNotSupported(methodName: string): void {
        throw new Error(`The "${methodName}" method is not support in the "${this.name}" state.`);
    }
}
