import { Spy } from 'jasmine-auto-spies';
import { TimerMachine } from '../state-machine.class';
import { createTimerMachineSpy } from '../test/create-timer-machine-spy.function';
import { durationEqualityTester } from '../test/duration-equality-tester.function';
import { Timer } from '../timer.class';
import { FocusState } from './focus-state.class';
import { SetTimeState } from './set-time-state.class';

describe('SetTimerState', () => {
  let target: SetTimeState;
  let timerMachine: TimerMachine;
  let timer: Spy<Timer>;

  beforeAll(() => {
    jasmine.addCustomEqualityTester(durationEqualityTester);
  });

  beforeEach(() => {
    timerMachine = createTimerMachineSpy();
    timer = timerMachine.timer as Spy<Timer>;
    target = new SetTimeState(timerMachine);
  });

  it('should be created', () => {
    expect(target)
      .toBeDefined();
  });

  it('focus show Pause and Stop button, then transition to FocusState', () => {
    // Arrange
    timerMachine.showPauseButton = false;
    timerMachine.showPlayButton = true;
    timerMachine.showStopButton = false;

    // Act
    target.focus();

    // Assert
    expect(timerMachine.remainingDuration)
      .toEqual(timerMachine.focusDuration);

    expect(timerMachine.showPauseButton)
      .toBeTrue();
    expect(timerMachine.showPlayButton)
      .toBeFalse();
    expect(timerMachine.showStopButton)
      .toBeTrue();

    expect(timer.start)
      .toHaveBeenCalledWith(timerMachine.focusDuration);

    expect(timerMachine.transition)
      .toHaveBeenCalledWith(FocusState);
  });
});
