import { TimerMachine } from '../state-machine.class';
import { PauseState } from '../states/pause-state.state';
import { Timer } from '../timer.class';
import {  TimerMachineMockFactory } from '../test/timer-machine-mock-factory.class';
import { PauseAction } from './pause-action.class';

jest.mock('../state-machine.class');
jest.mock('../timer.class');

describe('PauseAction', () => {
  let target: PauseAction;
  let targetAny: any;
  let timerMachine: TimerMachine;
  let timer: Timer;

  beforeEach(() => {
    timerMachine = TimerMachineMockFactory.build();
    timer = timerMachine.timer;

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
    expect(timer.stop)
      .toHaveBeenCalled();

    expect(timerMachine.showPauseButton)
      .toBe(false);
    expect(timerMachine.showPlayButton)
      .toBe(true);
    expect(timerMachine.showStopButton)
      .toBe(false);

    expect(timerMachine.transition)
      .toHaveBeenCalledWith(PauseState);
  });
});
