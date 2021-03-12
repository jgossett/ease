import { createSpyFromClass, Spy } from 'jasmine-auto-spies';
import { TimerMachine } from '../state-machine.class';
import { Timer } from '../timer.class';

export const createTimerMachineSpy = (): Spy<TimerMachine> => {
  const timerMachine = createSpyFromClass(TimerMachine, { gettersToSpyOn: ['timer'] });

  // create `timer` getter method.
  const timer = createSpyFromClass(Timer);
  timerMachine.accessorSpies.getters.timer.and.returnValue(timer);

  return timerMachine;
};
