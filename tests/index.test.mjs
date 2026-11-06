import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('decomposes day and remainder', () => {
  assert.deepEqual(api.durationParts(90061007), {
    days: 1,
    hours: 1,
    minutes: 1,
    seconds: 1,
    milliseconds: 7,
  });
});
test('handles zero', () => {
  assert.deepEqual(api.durationParts(0), {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
  });
});
test('handles one millisecond', () => {
  assert.equal(api.durationParts(1).milliseconds, 1);
});
test('handles hour boundary', () => {
  assert.equal(api.durationParts(3600000).hours, 1);
});
test('supports safe maximum', () => {
  assert.ok(api.durationParts(Number.MAX_SAFE_INTEGER).days > 0);
});
test('rejects negative duration', () => {
  assert.throws(() => api.durationParts(-1), RangeError);
});
