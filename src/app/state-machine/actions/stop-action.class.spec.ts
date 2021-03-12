import { Spy } from 'jasmine-auto-spies';
import { Duration } from 'luxon';
import { TimerMachine } from '../state-machine.class';
import { SetTimeState } from '../states/set-time-state.class';
import { Timer } from '../timer.class';
import { createTimerMachineSpy } from './create-timer-machine-spy.function';
import { StopAction } from './stop-action.class';

describe('StopAction', () => {
  let target: StopAction;
  let timerMachine: TimerMachine;
  let timer: Spy<Timer>;

  beforeEach(() => {
    timerMachine = createTimerMachineSpy();
    timer = timerMachine.timer as Spy<Timer>;

    target = new StopAction(timerMachine);
  });

  it('should create', () => {
    expect(target)
      .toBeDefined();
  });

  it('should show play button and transition to SetTimeState.', () => {
    // arrange
    const duration = Duration.fromISOTime('00:00:01');

    timerMachine.focusDuration = duration;
    timerMachine.showPauseButton = true;
    timerMachine.showPlayButton = false;
    timerMachine.showStopButton = true;

    // act
    target.do();

    // assert
    expect(timer.stop)
      .toHaveBeenCalled();

    // should clone, not copy reference.
    expect(timerMachine.remainingDuration)
      .toEqual(duration);
    expect(timerMachine.remainingDuration)
      .not
      .toBe(duration);

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
