import {Triangle} from '../shapes/triangle';

describe('Triangle Tests', () => {
    test('Triangle render should return correct SVG', () => {
      const triangle = new Triangle('red', 'black', "ABC");
      expect(triangle.render()).toMatch(/<polygon/);
      expect(triangle.render()).toContain('fill="red"');
    });
  });