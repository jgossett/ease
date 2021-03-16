import { createSpyFromClass, Spy } from 'jasmine-auto-spies';
import { Duration } from 'luxon';
import { TimerMachine } from '../state-machine.class';
import { Timer } from '../timer.class';

export const createTimerMachineSpy = (): Spy<TimerMachine> => {
  const timerMachine = createSpyFromClass(TimerMachine, { gettersToSpyOn: ['timer'] });
  timerMachine.remainingDuration = timerMachine.remainingDuration = Duration.fromISOTime('00:00:10');

  // create `timer` getter method.
  const timer = createSpyFromClass(Timer);
  timerMachine.accessorSpies.getters.timer.and.returnValue(timer);

  return timerMachine;
};
