import { TimerMachine } from '../state-machine.class';
import { createTimerMachineSpy } from '../test/create-timer-machine-spy.function';
import { Timer } from '../timer.class';
import { FocusState } from './focus-state.class';
import { SetTimeState } from './set-time-state.class';

jest.mock('../state-machine.class')
jest.mock('../timer.class')

describe('SetTimeState', () => {
  let target: SetTimeState;
  let targetAny: any;
  let timerMachine: TimerMachine;
  let timer: Timer;

  beforeEach(() => {
    timerMachine = createTimerMachineSpy();
    timer = timerMachine.timer;
    target = new SetTimeState(timerMachine);
    targetAny = target;
  });

  it('should be created', () => {
    expect(target)
      .toBeDefined();
    expect(targetAny.name)
      .toBe('Set Time');
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
      .toBe(true);
    expect(timerMachine.showPlayButton)
      .toBe(false);
    expect(timerMachine.showStopButton)
      .toBe(true);

    expect(timer.start)
      .toHaveBeenCalledWith(timerMachine.focusDuration);

    expect(timerMachine.transition)
      .toHaveBeenCalledWith(FocusState);
  });
});
