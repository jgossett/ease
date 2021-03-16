import { createSpyFromClass, Spy } from 'jasmine-auto-spies';
import { Duration } from 'luxon';
import { TimerMachine } from './state-machine.class';
import { FocusState } from './states/focus-state.class';
import { SetTimeState } from './states/set-time-state.class';
import { State } from './states/state.class';
import { MockState } from './test/mock-state.class';

describe('StateMachine', () => {
  let target: TimerMachine;
  let targetAny: any;
  let stateInstance: Spy<State>;

  beforeEach(() => {
    target = new TimerMachine();
    targetAny = target;
    stateInstance = createSpyFromClass(MockState);
    targetAny.stateInstance = stateInstance;
    targetAny.stateClass = MockState;
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
      .toBe(MockState);
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
    target.transition(FocusState);

    // Assert
    expect(targetAny.previousStateClass)
      .toBe(MockState);
    expect(targetAny.stateClass)
      .toBe(FocusState);
    expect(targetAny.stateInstance)
      .toBeInstanceOf(FocusState);
  });
});
