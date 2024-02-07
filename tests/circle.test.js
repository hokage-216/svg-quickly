import {Circle} from '../shapes/circle'; // importing shapes

describe('Circle Tests', () => {
  
    test('Circle render should return correct SVG', () => {
      const circle = new Circle('red', 'black', "ABC");
      expect(circle.render()).toMatch(/<circle/);
      expect(circle.render()).toContain('fill="red"');
    });
  });