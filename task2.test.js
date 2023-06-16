const reverseString = require('./task2');

test('Receive the string elements reversed', () => {
    expect(reverseString("Hello")).toMatch("olleH");
})



