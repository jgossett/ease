import { createSpyFromClass } from 'jasmine-auto-spies';
import { TimerMachine } from '../state-machine.class';
import { StopAction } from './stop-action.class';

describe('StopAction', () => {
  let target: StopAction;
  let timerMachine: TimerMachine;

  beforeEach(() => {
    timerMachine = createSpyFromClass(TimerMachine);
    target = new StopAction(timerMachine);
  });

  it('should create', () => {
    expect(target).toBeDefined();
  });
});
