import { Duration } from 'luxon';
import { durationEqualityTester } from './duration-equality-tester.function';

describe('durationEqualityTester', () => {
  let duration1: Duration;
  let duration2: Duration;

  beforeEach(() => {
    duration1 = Duration.fromISOTime('00:00:01');
    duration2 = Duration.fromISOTime('00:00:01');
  });

  it('should create.', () => {
    expect(durationEqualityTester)
      .toBeDefined();
  });

  it('should 2 durations with same values should be equal.', () => {
    // Act
    const actual = durationEqualityTester(duration1, duration2);

    // Assert
    expect(actual)
      .toBeTrue();
  });

  it('should 2 different duration values should not be equal.', () => {
    // Arrange
    duration2 = Duration.fromISOTime('00:00:02');

    // Act
    const actual = durationEqualityTester(duration1, duration2);

    // Assert
    expect(actual)
      .toBeFalse();
  });

  it('should 2 references should not be equal.', () => {
    // Arrange
    duration2 = duration1;

    // Act
    const actual = durationEqualityTester(duration1, duration2);

    // Assert
    expect(actual)
      .toBeFalse();
  });

  it('should return undefined with 1st argument is not a Duration class', () => {
    // Act
    const actual = durationEqualityTester(1, duration2);

    // Assert
    expect(actual).toBeUndefined();
  });

  it('should return undefined with 2nd argument is not a Duration class', () => {
    // Act
    const actual = durationEqualityTester(duration1, 1);

    // Assert
    expect(actual).toBeUndefined();
  });
});
