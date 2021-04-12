import { Duration } from 'luxon';
import { TimerMachine } from '../state-machine.class';
import { TimerMachineMockFactory } from '../test/timer-machine-mock-factory.class';
import { Timer } from '../timer.class';
import { PauseState } from './pause-state.state';

jest.mock('../timer.class');
jest.mock('../state-machine.class');

describe('PauseState', () => {
  let target: PauseState;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let targetAny: any;
  let timerMachine: TimerMachine;
  let timer: Timer;

  beforeEach(() => {
    timerMachine = TimerMachineMockFactory.build();

    timer = timerMachine.timer;

    target = new PauseState(timerMachine);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    targetAny = target as any;
  });

  it('should create', () => {
    expect(target)
      .toBeDefined();
    expect(targetAny.name)
      .toEqual('Pause');
  });

  it('focus should go back to previous state', () => {
    // act
    target.focus();

    // assert
    expect(timerMachine.showPauseButton)
      .toBe(true);
    expect(timerMachine.showPlayButton)
      .toBe(false);
    expect(timerMachine.showStopButton)
      .toBe(true);

    expect(timer.start)
      .toHaveBeenCalledWith(Duration.fromISOTime('00:00:10'));
    expect(timerMachine.back)
      .toHaveBeenCalled();
  });
});
