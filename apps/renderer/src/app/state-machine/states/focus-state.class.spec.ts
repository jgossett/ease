import { Duration } from 'luxon';
import { PauseAction } from '../actions/pause-action.class';
import { StopAction } from '../actions/stop-action.class';
import { TimerMachine } from '../state-machine.class';
import { TimerMachineMockFactory } from '../test/timer-machine-mock-factory.class';
import { Timer } from '../timer.class';
import { FocusState } from './focus-state.class';
import { RestState } from './rest-state.class';

jest.mock('../timer.class');
jest.mock('../state-machine.class');
jest.mock('../actions/pause-action.class');
jest.mock('../actions/stop-action.class');

describe('FocusState', () => {
  let target: FocusState;
  let targetAny: any;
  let timerMachine: TimerMachine;
  let timer: Timer;
  let pauseAction: PauseAction;
  let stopAction: StopAction;

  beforeEach(() => {
    timerMachine = TimerMachineMockFactory.build();

    timer = timerMachine.timer;

    target = new FocusState(timerMachine);
    targetAny = target as any;

    pauseAction = new PauseAction(timerMachine);
    targetAny.pauseAction = pauseAction;

    stopAction = new StopAction(timerMachine);
    targetAny.stopAction = stopAction;
  });

  it('should create', () => {
    expect(target)
      .toBeDefined();
    expect(targetAny.name)
      .toEqual('Focus');
  });

  describe('everySecond', () => {
    it('should set remainingDuration when remainingDuration is not zero', () => {
      // arrange
      const remainingDuration = Duration.fromISOTime('00:00:09');

      // act
      target.everySecond(remainingDuration);

      // assert
      expect(timerMachine.remainingDuration)
        .toEqual(remainingDuration);

      expect(timerMachine.rest)
        .not
        .toHaveBeenCalled();
    });

    it('should set remainingDuration and rest when remainingDuration is zero', () => {
      // arrange
      const remainingDuration = Duration.fromISOTime('00:00:00');

      // act
      target.everySecond(remainingDuration);

      // assert
      expect(timerMachine.remainingDuration)
        .toEqual(remainingDuration);
      expect(timerMachine.remainingDuration)
        .not
        .toBe(remainingDuration);

      expect(timerMachine.rest)
        .toHaveBeenCalled();
    });
  });

  it('rest should transition to RestState', () => {
    // act
    target.rest();

    // assert
    expect(timer.stop)
      .toHaveBeenCalled();

    expect(timerMachine.remainingDuration)
      .toEqual(timerMachine.restDuration);

    expect(timer.start)
      .toHaveBeenCalled();

    expect(timerMachine.transition)
      .toHaveBeenCalledWith(RestState);
  });

  it('pause should delegate to PauseAction.', () => {
    // Act
    target.pause();

    // Assert
    expect(pauseAction.do)
      .toHaveBeenCalled();
  });


  it('stop should delegate to StopAction.', () => {
    // Act
    target.stop();

    // Assert
    expect(stopAction.do)
      .toHaveBeenCalled();
  });
});
