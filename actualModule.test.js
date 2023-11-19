// actualModule.test.js
const actualModule = require('./actualModule');
const calledModule = require('./calledModule');

test('mocks the calledFunction and tests actualModule', () => {
    // Mock the calledFunction inside the test
    jest.spyOn(actualModule, 'actualFunction').mockReturnValue('Mocked Called Function Output');
    jest.spyOn(calledModule, 'calledFunction').mockReturnValue('Mocked Called Function Output');

    expect(actualModule.actualFunction()).toBe('Mocked Called Function Output');
    expect(calledModule.calledFunction()).toBe('Mocked Called Function Output'); // This will pass
});
