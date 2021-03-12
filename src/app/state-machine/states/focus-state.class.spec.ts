import { Spy } from 'jasmine-auto-spies';
import { createTimerMachineSpy } from '../actions/create-timer-machine-spy.function';
import { TimerMachine } from '../state-machine.class';
import { FocusState } from './focus-state.class';

describe('FocusState', () => {
  let target: FocusState;
  let timerMachine: Spy<TimerMachine>;

  beforeEach(() => {
    timerMachine = createTimerMachineSpy();
    target = new FocusState(timerMachine);
  });

  it('should create', () => {
    expect(target)
      .toBeDefined();
  });
});
