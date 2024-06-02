import { getLastValue } from '@/utils/parser';

describe('getLastValue', () => {
  test('should return the first value before underscore in the last line', () => {
    const data = 'line1\nline2\nvalue1_value2="value1_value2"\n';
    expect(getLastValue(data)).toBe('value1');
  });

  test('should return an empty string if no match is found', () => {
    const data = 'line1\nline2\nline3\n';
    expect(getLastValue(data)).toBe('');
  });

  test('should return an empty string if data is empty', () => {
    const data = '';
    expect(getLastValue(data)).toBe('');
  });
});
