import switchNumber from '../../appliction/switch-number.js';

test('switchNumber()', () => {
    let result = switchNumber(32, 2);
    expect('100000').toBe(result);
});
