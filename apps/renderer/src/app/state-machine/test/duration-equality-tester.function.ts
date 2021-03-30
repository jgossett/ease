import { updateDefaultProject } from '@nrwl/workspace/src/generators/move/lib/update-default-project';
import { Duration } from 'luxon';

const isDuration = (duration: any) => {
  return duration instanceof Duration;
};

type AlikeMatcher = (any1: any, any2: any) => boolean;

/**
 * Determines whether or not 2 Duration instances are equal but not same instance.
 */
export const durationEqualityTester: AlikeMatcher = (any1: any, any2: any) => {
  const canTest = isDuration(any1) && isDuration(any2);
  if (!canTest) {
    return;
  }

  const duration1 = any1 as Duration;
  const duration2 = any2 as Duration;

  const duration1Normalized = duration1.normalize();
  const duration2Normalized = duration2.normalize();

  const isSameInstance = duration1 === duration2;
  return (
    duration1Normalized.equals(duration2Normalized)
    && !isSameInstance
  );
};

const alikeMatchers: AlikeMatcher [] = [
  durationEqualityTester
]


const couldNotFindMatcherMessage = () => "Could not find compatible matcher.";
const passMessage = () => undefined;

export const alikeMatcher = {
  alike: (received: any, ...actual:any[]) => {
    const foundMatcher = false;
    let pass = false;

    for(const alikeMatcher of alikeMatchers){
      const result = alikeMatcher(received, actual);

      // Matcher is not compatible. Keep looking for a compatible matcher.
      if(result != null){
        continue;
      }

      pass = result
      break;
    }

    const message = !foundMatcher ? couldNotFindMatcherMessage: passMessage;

    return {
      pass,
      message
    };
  }
}
