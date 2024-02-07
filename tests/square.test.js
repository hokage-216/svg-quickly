import {Square} from '../shapes/square';

describe('Square Tests', () => {
  
    test('Square render should return correct SVG', () => {
      const square = new Square('red', 'black', "ABC");
      expect(square.render()).toMatch(/<rect/);
      expect(square.render()).toContain('fill="red"');
    });
  });