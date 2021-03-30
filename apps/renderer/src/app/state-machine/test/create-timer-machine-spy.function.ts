import { Duration } from 'luxon';
import { TimerMachine } from '../state-machine.class';
import { Timer } from '../timer.class';

export const createTimerMachineSpy = (): TimerMachine => {
  const timerMachine = new TimerMachine();

  timerMachine.remainingDuration = Duration.fromISOTime('00:00:10');
  timerMachine.timer = new Timer(jest.fn());

  return timerMachine;
};
