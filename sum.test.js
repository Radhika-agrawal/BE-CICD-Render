// sum.test.js
import { describe, it, expect } from 'vitest';
import sum from './sum.js';

describe('sum', () => {
  it('adds 1 + 2', () => {
    expect(sum(1, 2)).toBe(3);
  });
});
