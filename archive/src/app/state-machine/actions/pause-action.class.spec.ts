import { Spy } from 'jasmine-auto-spies';
import { TimerMachine } from '../state-machine.class';
import { PauseState } from '../states/pause-state.state';
import { Timer } from '../timer.class';
import { createTimerMachineSpy } from '../test/create-timer-machine-spy.function';
import { PauseAction } from './pause-action.class';

describe('PauseAction', () => {
  let target: PauseAction;
  let targetAny: any;
  let timerMachine: Spy<TimerMachine>;
  let timer: Spy<Timer>;

  beforeEach(() => {
    timerMachine = createTimerMachineSpy();
    timer = timerMachine.timer as Spy<Timer>;

    target = new PauseAction(timerMachine);
    targetAny = target;
  });

  it('should create', () => {
    expect(target)
      .toBeDefined();
    expect(targetAny.timerMachine)
      .toBeDefined();
  });

  it('should only show play button and transition to PauseState.', () => {
    // arrange
    timerMachine.showPauseButton = true;
    timerMachine.showPlayButton = false;
    timerMachine.showStopButton = true;

    // act
    target.do();

    // assert
    timer.stop.calledWith();

    expect(timerMachine.showPauseButton)
      .toBeFalse();
    expect(timerMachine.showPlayButton)
      .toBeTrue();
    expect(timerMachine.showStopButton)
      .toBeFalse();

    expect(timerMachine.transition)
      .toHaveBeenCalledWith(PauseState);
  });
});
