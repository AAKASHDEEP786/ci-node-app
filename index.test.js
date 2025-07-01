const greet = require('./index');

test('returns correct greeting', () => {
    expect(greet()).toBe('Hello, CI/CD!');
});

