import { exampleFunction } from '@/example';

test('exampleFunction returns correct string', () => {
  expect(exampleFunction('Test')).toBe('Received: Test');
});
