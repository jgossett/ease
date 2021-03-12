import { createSpyFromClass, Spy } from 'jasmine-auto-spies';
import { TimerMachine } from '../state-machine.class';
import { Timer } from '../timer.class';
import { PauseAction } from './pause-action.class';

describe('PauseAction', () => {
  let target: PauseAction;
  let targetAny: any;
  let timerMachine: Spy<TimerMachine>;
  let timer: Spy<Timer>;

  beforeEach(() => {
    timerMachine = createSpyFromClass(TimerMachine, { gettersToSpyOn: ['timer'] });

    timer = createSpyFromClass(Timer);
    timerMachine.accessorSpies.getters.timer.and.returnValue(timer);

    target = new PauseAction(timerMachine);
    targetAny = target;
  });

  it('should create', () => {
    expect(target)
      .toBeDefined();
    expect(targetAny.timerMachine)
      .toBeDefined();
  });

  it('should only show play button', () => {
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

    timerMachine.transition.calledWith(PauseAction);
  });
});