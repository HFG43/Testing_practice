const capitalize = require('./task4');

test('Should return the first element of the string capitalized', () => {
    expect(capitalize("hello")).toBe("Hello");
})