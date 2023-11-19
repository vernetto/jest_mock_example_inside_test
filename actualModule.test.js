
// actualModule.test.js
const actualModule = require('./actualModule');
jest.mock('./calledModule'); // This automatically mocks all exports from calledModule
const calledModule = require('./calledModule');

test('mocks the calledFunction and tests actualModule', () => {
    // Provide a mock implementation for calledFunction
    calledModule.calledFunction.mockImplementation(() => 'Mocked Called Function Output');

    expect(actualModule.actualFunction()).toBe('Mocked Called Function Output');
});

test('mocks the calledFunction and tests actualModule 2', () => {
    // Provide a mock implementation for calledFunction
    calledModule.calledFunction.mockImplementation(() => 'Mocked Called Function Output 2');

    expect(actualModule.actualFunction()).toBe('Mocked Called Function Output 2');
});

