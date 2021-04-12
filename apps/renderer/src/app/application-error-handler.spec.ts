import { ApplicationErrorHandler } from './application-error-handler';

describe('ApplicationErrorHandler', () => {
  let target: ApplicationErrorHandler;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let targetAny: any;

  beforeEach(() => {
    target = new ApplicationErrorHandler();
    targetAny = target;

    jest.spyOn(window, 'alert')
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      .mockImplementation(() => {
      });
  });

  it('should create an instance', () => {
    expect(target)
      .toBeDefined();
  });

  it('handleError should alert messages', () => {
    // Arrange
    const error = new Error('test message.');

    // Act
    target.handleError(error);

    // Assert
    expect(window.alert)
      .toHaveBeenNthCalledWith(
        1,
        'An unhandled error has occurred.'
        + '\n'
        + '\n  test message.'
      );
  });

  describe('format', () => {
    it('should format Error type.', () => {
      // Arrange
      const error = new Error('test message.');

      // Act
      const actual = targetAny.format(error);

      // Assert
      expect(actual)
        .toBe(
          'An unhandled error has occurred.'
          + '\n'
          + '\n  test message.'
        );
    });

    it('should format everything but Error type.', () => {
      // Arrange
      const error = 'test message.';

      // Act
      const actual = targetAny.format(error);

      // Assert
      expect(actual)
        .toBe(
          'An unhandled error has occurred.'
          + '\n'
          + '\n  test message.'
        );
    });
  });
});
