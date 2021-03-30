import { Duration } from 'luxon';
import { PauseAction } from '../actions/pause-action.class';
import { StopAction } from '../actions/stop-action.class';
import { TimerMachine } from '../state-machine.class';
import { createTimerMachineSpy } from '../test/create-timer-machine-spy.function';
import { alikeMatcher } from '../test/duration-equality-tester.function';
import { Timer } from '../timer.class';
import { RestState } from './rest-state.class';
import { SetTimeState } from './set-time-state.class';

jest.mock('../timer.class');
jest.mock('../state-machine.class');
jest.mock('./set-time-state.class');
jest.mock('../actions/pause-action.class');
jest.mock('../actions/stop-action.class');

describe('RestState', () => {
  let target: RestState;
  let targetAny: any;
  let timerMachine: TimerMachine;
  let timer: Timer;
  let pauseAction: PauseAction;
  let stopAction: StopAction;

  expect.extend(alikeMatcher);

  beforeEach(() => {
    timerMachine = createTimerMachineSpy();
    timer = timerMachine.timer;

    target = new RestState(timerMachine);
    targetAny = target as any;

    pauseAction = new PauseAction(timerMachine);
    targetAny.pauseAction = pauseAction;

    stopAction = new StopAction(timerMachine);
    targetAny.stopAction = stopAction;
  });

  it('should create', () => {
    // Assert
    expect(target)
      .toBeDefined();
    expect(targetAny.name)
      .toBe('Rest');
  });

  describe('everySecond', () => {
    it('should set remainingDuration', () => {
      // Arrange
      const remainingDuration = Duration.fromISOTime('00:00:01');

      // Act
      target.everySecond(remainingDuration);

      // Assert
      expect(timerMachine.remainingDuration)
        .toEqual(remainingDuration);
      expect(timerMachine.completeInterval)
        .not
        .toHaveBeenCalled();
    });

    it('should set remainingDuration and completeInterval when remainingDuration is zero', () => {
      // Arrange
      const remainingDuration = Duration.fromISOTime('00:00:00');

      // Act
      target.everySecond(remainingDuration);

      // Assert
      expect(timerMachine.remainingDuration)
        .toEqual(remainingDuration);
      expect(timerMachine.completeInterval)
        .toHaveBeenCalled();
    });
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

  it('completeCycle should show play button and transition to SetTimerState', () => {
    // Arrange
    timerMachine.showPauseButton = false;
    timerMachine.showPlayButton = true;
    timerMachine.showStopButton = false;

    // Act
    target.completeInterval();

    // Assert
    expect(timer.stop)
      .toHaveBeenCalled();

    expect(timerMachine.remainingDuration)
      .toEqual(timerMachine.focusDuration);

    expect(timerMachine.showPauseButton)
      .toBe(false);
    expect(timerMachine.showPlayButton)
      .toBe(true);
    expect(timerMachine.showStopButton)
      .toBe(false);

    expect(timerMachine.transition)
      .toHaveBeenCalledWith(SetTimeState);
  });

});
