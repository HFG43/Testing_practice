const stringLength = require('./task1');

test('count the string elemnts', () => {
    expext(stringLength("Hello")).toBe(5);
})