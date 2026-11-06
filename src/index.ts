export interface DurationParts {
  readonly days: number;
  readonly hours: number;
  readonly minutes: number;
  readonly seconds: number;
  readonly milliseconds: number;
}
export function durationParts(value: number): DurationParts {
  if (!Number.isSafeInteger(value) || value < 0)
    throw new RangeError('Expected nonnegative safe integer milliseconds');
  let n = value;
  const days = Math.floor(n / 86400000);
  n %= 86400000;
  const hours = Math.floor(n / 3600000);
  n %= 3600000;
  const minutes = Math.floor(n / 60000);
  n %= 60000;
  const seconds = Math.floor(n / 1000);
  return { days, hours, minutes, seconds, milliseconds: n % 1000 };
}
