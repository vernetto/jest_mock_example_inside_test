// actualModule.test.js
const { actualFunction } = require('./actualModule');
const calledModule = require('./calledModule');

test('mocks the calledFunction and tests actualFunction', () => {
    // Mock the calledFunction inside the test
    jest.mock('./calledModule', () => {
        return {
            calledFunction: jest.fn(() => 'Mocked Called Function Output')
        };
    });

    expect(actualFunction()).toBe('Mocked Called Function Output');
    expect(calledModule.calledFunction()).toBe('Mocked Called Function Output'); // This will pass
});
