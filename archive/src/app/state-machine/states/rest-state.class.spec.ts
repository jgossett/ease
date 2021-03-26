import { createSpyFromClass, Spy } from 'jasmine-auto-spies';
import { Duration } from 'luxon';
import { PauseAction } from '../actions/pause-action.class';
import { StopAction } from '../actions/stop-action.class';
import { TimerMachine } from '../state-machine.class';
import { createTimerMachineSpy } from '../test/create-timer-machine-spy.function';
import { durationEqualityTester } from '../test/duration-equality-tester.function';
import { Timer } from '../timer.class';
import { RestState } from './rest-state.class';
import { SetTimeState } from './set-time-state.class';

describe('RestState', () => {
  let target: RestState;
  let targetAny: any;
  let timerMachine: TimerMachine;
  let timer: Spy<Timer>;
  let pauseAction: Spy<PauseAction>;
  let stopAction: Spy<StopAction>;

  beforeAll(() => {
    jasmine.addCustomEqualityTester(durationEqualityTester);
  });

  beforeEach(() => {
    timerMachine = createTimerMachineSpy();
    timer = timerMachine.timer as Spy<Timer>;

    target = new RestState(timerMachine);
    targetAny = target as any;

    pauseAction = createSpyFromClass(PauseAction);
    targetAny.pauseAction = pauseAction;

    stopAction = createSpyFromClass(StopAction);
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
      .toBeFalse();
    expect(timerMachine.showPlayButton)
      .toBeTrue();
    expect(timerMachine.showStopButton)
      .toBeFalse();

    expect(timerMachine.transition)
      .toHaveBeenCalledWith(SetTimeState);
  });

});
