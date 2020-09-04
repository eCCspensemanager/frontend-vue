import { generateRandomNo } from '../../../src/store/storage-util';

describe('storage-util.js', () => {
  it('generates random strings', () => {
    let first = generateRandomNo();
    let second = generateRandomNo();

    expect(first == second).toBeFalsy();
  });
});
