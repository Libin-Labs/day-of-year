import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('counts first day', () => {
  assert.equal(api.dayOfYear('2025-01-01'), 1);
});
test('counts final ordinary day', () => {
  assert.equal(api.dayOfYear('2025-12-31'), 365);
});
test('counts leap-year final day', () => {
  assert.equal(api.dayOfYear('2024-12-31'), 366);
});
test('counts leap day', () => {
  assert.equal(api.dayOfYear('2024-02-29'), 60);
});
test('is unaffected by UTC hour offsets', () => {
  assert.equal(api.dayOfYear('2000-03-01'), 61);
});
test('rejects impossible dates', () => {
  assert.throws(() => api.dayOfYear('2025-02-29'), RangeError);
});
