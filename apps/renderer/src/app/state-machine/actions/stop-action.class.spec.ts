import { Duration } from 'luxon';
import { TimerMachine } from '../state-machine.class';
import { SetTimeState } from '../states/set-time-state.class';
import { Timer } from '../timer.class';
import { createTimerMachineSpy } from '../test/create-timer-machine-spy.function';
import { StopAction } from './stop-action.class';

jest.mock('../state-machine.class');
jest.mock('../timer.class');

describe('StopAction', () => {
  let target: StopAction;
  let timerMachine: TimerMachine;
  let timer: Timer;

  beforeEach(() => {
    timerMachine = createTimerMachineSpy();
    timer = timerMachine.timer;

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
      .toBe(false);
    expect(timerMachine.showPlayButton)
      .toBe(true);
    expect(timerMachine.showStopButton)
      .toBe(false);

    expect(timerMachine.transition)
      .toHaveBeenCalledWith(SetTimeState);
  });
});
