import { Duration } from 'luxon';
import { TimerMachine } from './state-machine.class';
import { FocusState } from './states/focus-state.class';
import { PauseState } from './states/pause-state.state';
import { State } from './states/state.class';

jest.mock('./states/focus-state.class.ts')

describe('StateMachine', () => {
  let target: TimerMachine;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let targetAny: any;
  let stateInstance: State;

  beforeEach(() => {
    target = new TimerMachine();
    targetAny = target;
    stateInstance = new FocusState(target);
    targetAny.stateInstance = stateInstance;
    targetAny.stateClass = FocusState;
  });

  it('should create', () => {
    expect(target)
      .toBeDefined();
    expect(target.restDuration)
      .toEqual(Duration.fromISOTime('00:05:00'));
    expect(target.focusDuration)
      .toEqual(Duration.fromISOTime('00:25:00'));
    expect(target.remainingDuration)
      .toEqual(Duration.fromISOTime('00:25:00'));
    expect(targetAny.stateClass)
      .toBe(FocusState);
    expect(targetAny.previousStateClass)
      .toBeUndefined();
  });

  it('focus should delegate to state', () => {
    // Act
    target.focus();

    // Assert
    expect(stateInstance.focus)
      .toHaveBeenCalled();
  });

  it('rest should delegate to state', () => {
    // Act
    target.rest();

    // Assert
    expect(stateInstance.rest)
      .toHaveBeenCalled();
  });

  it('pause should delegate to state', () => {
    // Act
    target.pause();

    // Assert
    expect(stateInstance.pause)
      .toHaveBeenCalled();
  });

  it('reset should delegate to state', () => {
    // Act
    target.stop();

    // Assert
    expect(stateInstance.stop)
      .toHaveBeenCalled();
  });


  it('everySecond should delegate to state', () => {
    // Arrange
    const duration = Duration.fromISOTime('00:00:01');

    // Act
    target.everySecond(duration);

    // Assert
    expect(stateInstance.everySecond)
      .toHaveBeenCalledWith(duration);
  });

  it('transition should set previousStateClass', () => {
    // Act
    target.transition(PauseState);

    // Assert
    expect(targetAny.previousStateClass)
      .toBe(FocusState);
    expect(targetAny.stateClass)
      .toBe(PauseState);
    expect(targetAny.stateInstance)
      .toBeInstanceOf(PauseState);
  });
});
