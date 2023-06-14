const Calculator = require('./task3.js');

describe('Calculator', () => {
    const calculator = new Calculator();

    test('correctly adds()', () => {
        expect(calculator.add(5,5,10)).toBe(20);
    });
  
    test('correctly also adds()', () => {
        expect(calculator.add(3,5,-1)).toBe(7);
    });

    test('correctly also adds()', () => {
        expect(calculator.add(1.5,1.5,-1)).toBe(2);
    });
  });


describe('Calculator substracts', () => {
  const calculator = new Calculator();

  test('correctly subtacts multiple numbers', () => {
      expect(calculator.subtract(20,10,5)).toBe(5);
  });
  
  test('correctly subtract two negative numbers', () => {
      expect(calculator.subtract(-2,-5)).toBe(3);
  });

  test('correctly subtracts positive and negative numbers', () => {
      expect(calculator.subtract(5,-2,)).toBe(7);
  });
});

