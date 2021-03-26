import { Duration } from 'luxon';
import CustomEqualityTester = jasmine.CustomEqualityTester;

const isDuration = (duration: any) => {
  return duration instanceof Duration;
};

/**
 * Determines whether or not 2 Duration instances are equal but not same instance.
 */
export const durationEqualityTester: CustomEqualityTester = (any1: any, any2: any) => {
  const canTest = isDuration(any1) && isDuration(any2);
  if (!canTest) {
    return;
  }

  const duration1 = any1 as Duration;
  const duration2 = any2 as Duration;

  const duration1Normalized = duration1.normalize();
  const duration2Normalized = duration2.normalize();

  const isSameInstance = duration1 === duration2;
  console.log(isSameInstance);
  return (
    duration1Normalized.equals(duration2Normalized)
    && !isSameInstance
  );
};
